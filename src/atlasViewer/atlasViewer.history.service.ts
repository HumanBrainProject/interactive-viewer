import { Injectable, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Effect, Actions, ofType } from '@ngrx/effects'
import { IavRootStoreInterface, GENERAL_ACTION_TYPES, defaultRootState } from "src/services/stateStore.service";
import { debounceTime, distinctUntilChanged, map, startWith, filter, withLatestFrom, switchMap, take, switchMapTo } from "rxjs/operators";
import { Subscription, fromEvent, merge, of } from "rxjs";
import { cvtStateToSearchParam, cvtSearchParamToState } from "./atlasViewer.urlUtil";
import { AtlasViewerConstantsServices } from "src/ui/databrowserModule/singleDataset/singleDataset.base";

const getSearchParamStringFromState = state => {
  try {
    return cvtStateToSearchParam(state).toString()
  } catch (e) {
    console.warn(`cvt state to search param error`, e)
    return null
  }
}

@Injectable({
  providedIn: 'root'
})

export class AtlasViewerHistoryUseEffect implements OnDestroy{

  // ensure that fetchedTemplates are all populated
  @Effect()
  parsingSearchUrlToState$ = this.store$.pipe(
    filter(state => state.viewerState.fetchedTemplates.length === this.constantService.totalTemplates),
    take(1),
    switchMapTo(merge(
      // parsing state can occur via 2 ways:
      // either pop state event or on launch
      fromEvent(window, 'popstate').pipe(
        map(({ state } : PopStateEvent) => state)
      ),
      of(new URLSearchParams(window.location.search).toString())
    ))
  ).pipe(
    withLatestFrom(this.store$),
    map(([searchUrl, storeState]: [string, IavRootStoreInterface] ) => {
      const search = new URLSearchParams(searchUrl)
      try {
        if (Array.from(search.keys()).length === 0) {
          // if empty searchParam
          return {
            type: GENERAL_ACTION_TYPES.APPLY_STATE,
            state: {
              ...defaultRootState,
              viewerState: {
                ...defaultRootState.viewerState,
                fetchedTemplates: storeState.viewerState.fetchedTemplates
              }
            }
          }
        } else {
          // if non empty search param
          const newState = cvtSearchParamToState(search, storeState)
          return {
            type: GENERAL_ACTION_TYPES.APPLY_STATE,
            state: newState
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
              fetchedTemplates: storeState.viewerState.fetchedTemplates
            }
          }
        }
      }
    })
  )

  private subscriptions: Subscription[] = []

  private currentStateSearchParam$ = this.store$.pipe(
    map(getSearchParamStringFromState),
    filter(v => v !==  null)
  )

  constructor(
    private store$: Store<IavRootStoreInterface>,
    private actions$: Actions,
    private constantService: AtlasViewerConstantsServices
  ){
    this.subscriptions.push(
      
      // GENERAL_ACTION_TYPES.APPLY_STATE is triggered by pop state or initial
      // conventiently, the action has a state property
      this.actions$.pipe(
        ofType(GENERAL_ACTION_TYPES.APPLY_STATE),
        // subscribe to inner obs on init
        startWith({}),
        switchMap(({ state } :any) => 
          this.currentStateSearchParam$.pipe(
            distinctUntilChanged(),
            debounceTime(100),

            // compares the searchParam triggerd by change of state with the searchParam generated by GENERAL_ACTION_TYPES.APPLY_STATE
            // if the same, the change is induced by GENERAL_ACTION_TYPES.APPLY_STATE, and should NOT be pushed to history
            filter((newSearchParam, index) => {
              const oldSearchParam = (state && getSearchParamStringFromState(state)) || ''

              // in the unlikely event that user returns to the exact same state without use forward/back button
              return index > 0 || newSearchParam !== oldSearchParam
            })
          )
        )
      ).subscribe(newSearchString => {
        const url = new URL(window.location.toString())
        url.search = newSearchString
        window.history.pushState(newSearchString, '', url.toString())
      })
    )
  }

  ngOnDestroy(){
    while(this.subscriptions.length > 0) this.subscriptions.pop().unsubscribe()
  }
}