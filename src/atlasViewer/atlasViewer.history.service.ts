import { Injectable, OnDestroy } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Store } from "@ngrx/store";
import { fromEvent, merge, of, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, switchMapTo, take, withLatestFrom, shareReplay } from "rxjs/operators";
import { defaultRootState, GENERAL_ACTION_TYPES, IavRootStoreInterface } from "src/services/stateStore.service";
import { AtlasViewerConstantsServices } from "src/atlasViewer/atlasViewer.constantService.service";
import { cvtSearchParamToState, cvtStateToSearchParam } from "./atlasViewer.urlUtil";
import { viewerStateHelperStoreName } from '../services/state/viewerState.store.helper'
import { PureContantService } from "src/util";
const getSearchParamStringFromState = state => {
  try {
    return cvtStateToSearchParam(state).toString()
  } catch (e) {
    throw new Error(`cvt state to search param error ${e.toString()}`)
  }
}

@Injectable({
  providedIn: 'root',
})

export class AtlasViewerHistoryUseEffect implements OnDestroy {

  // ensure that fetchedTemplates are all populated
  @Effect()
  public parsingSearchUrlToState$ = this.store$.pipe(
    filter(state => {
      return state.viewerState.fetchedTemplates.length === this.constantService.totalTemplates &&
        state[viewerStateHelperStoreName].fetchedAtlases.length === this.pureConstantSErvice.totalAtlasesLength
    }),
    take(1),
    switchMapTo(merge(
      // parsing state can occur via 2 ways:
      // either pop state event or on launch
      fromEvent(window, 'popstate').pipe(
        map(({ state }: PopStateEvent) => state),
      ),
      of(new URLSearchParams(window.location.search).toString()),
    )),
  ).pipe(
    withLatestFrom(this.store$),
    map(([searchUrl, storeState]: [string, any] ) => {
      const search = new URLSearchParams(searchUrl)
      try {
        if (Array.from(search.keys()).length === 0) {
          // if empty searchParam
          return {
            type: GENERAL_ACTION_TYPES.APPLY_STATE,
            state: {
              ...defaultRootState,
              ...storeState,
              viewerState: {
                ...defaultRootState.viewerState,
                fetchedTemplates: storeState.viewerState.fetchedTemplates,
              },
            },
          }
        } else {
          // if non empty search param
          const newState = cvtSearchParamToState(search, storeState)
          return {
            type: GENERAL_ACTION_TYPES.APPLY_STATE,
            state: newState,
          }
        }
      } catch (e) {
        // usually parsing error
        // TODO should log
        return {
          type: GENERAL_ACTION_TYPES.APPLY_STATE,
          state: {
            ...defaultRootState,
            viewerState: {
              ...defaultRootState.viewerState,
              fetchedTemplates: storeState.viewerState.fetchedTemplates,
            },
            viewerStateHelper: {
              ...defaultRootState.viewerStateHelper,
              fetchedAtlases: storeState.viewerStateHelper.fetchedAtlases
            }
          },
        }
      }
    }),
  )

  private subscriptions: Subscription[] = []

  private currentStateSearchParam$ = this.store$.pipe(
    map(s => {
      try {
        return getSearchParamStringFromState(s)
      } catch (e) {
        // TODO parsing state to search param error
        return null
      }
    }),
    filter(v => v !==  null),
  )

  // GENERAL_ACTION_TYPES.APPLY_STATE is triggered by pop state or initial
  // conventiently, the action has a state property
  public setNewSearchString$ = this.actions$.pipe(
    ofType(GENERAL_ACTION_TYPES.APPLY_STATE),
    // subscribe to inner obs on init
    startWith({}),
    switchMap(({ state }: any) =>
      this.currentStateSearchParam$.pipe(
        shareReplay(1),
        distinctUntilChanged(),
        debounceTime(100),

        // compares the searchParam triggerd by change of state with the searchParam generated by GENERAL_ACTION_TYPES.APPLY_STATE
        // if the same, the change is induced by GENERAL_ACTION_TYPES.APPLY_STATE, and should NOT be pushed to history
        filter((newSearchParam, index) => {
          try {
            const oldSearchParam = (state && getSearchParamStringFromState(state)) || ''

            // in the unlikely event that user returns to the exact same state without use forward/back button
            return index > 0 || newSearchParam !== oldSearchParam
          } catch (e) {
            return index > 0 || newSearchParam !== ''
          }
        })
      )
    )
  )

  constructor(
    private store$: Store<IavRootStoreInterface>,
    private actions$: Actions,
    private constantService: AtlasViewerConstantsServices,
    private pureConstantSErvice: PureContantService
  ) {

    this.setNewSearchString$.subscribe(newSearchString => {
      const url = new URL(window.location.toString())
      url.search = newSearchString
      window.history.pushState(newSearchString, '', url.toString())
    })
  }

  public ngOnDestroy() {
    while (this.subscriptions.length > 0) { this.subscriptions.pop().unsubscribe() }
  }
}
