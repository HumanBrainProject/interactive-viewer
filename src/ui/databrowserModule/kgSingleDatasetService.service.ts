import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy, TemplateRef } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { filter, shareReplay } from "rxjs/operators";
import { IDataEntry, ViewerPreviewFile, DATASETS_ACTIONS_TYPES } from "src/services/state/dataStore.store";
import { IavRootStoreInterface } from "src/services/stateStore.service";
import { BACKENDURL } from "src/util/constants";
import { uiStateShowBottomSheet } from "src/services/state/uiState.store.helper";
import { ngViewerActionRemoveNgLayer } from "src/services/state/ngViewerState/actions";

@Injectable({ providedIn: 'root' })
export class KgSingleDatasetService implements OnDestroy {

  private subscriptions: Subscription[] = []
  public ngLayers: Set<string> = new Set()

  constructor(
    private store$: Store<IavRootStoreInterface>,
    private http: HttpClient,
  ) {

    this.subscriptions.push(
      this.store$.pipe(
        select('ngViewerState'),
        filter(v => !!v),
      ).subscribe(layersInterface => {
        this.ngLayers = new Set(layersInterface.layers.map(l => l.source.replace(/^nifti:\/\//, '')))
      }),
    )
  }

  public ngOnDestroy() {
    while (this.subscriptions.length > 0) {
      this.subscriptions.pop().unsubscribe()
    }
  }

  private memoizedDatasetFromKg: Map<string, Observable<any>> = new Map()

  public getInfoFromKg({ kgId, kgSchema = 'minds/core/dataset/v1.0.0' }: Partial<KgQueryInterface>) {
    const key = `${kgSchema}/${kgId}`
    if (this.memoizedDatasetFromKg.has(key)) return this.memoizedDatasetFromKg.get(key)
    const _url = new URL(`${BACKENDURL.replace(/\/$/, '')}/datasets/kgInfo`)
    const searchParam = _url.searchParams
    searchParam.set('kgSchema', kgSchema)
    searchParam.set('kgId', kgId)
    const query$ = this.http.get<any>(_url.toString(), { responseType: 'json' }).pipe(
      shareReplay(1)
    )
    this.memoizedDatasetFromKg.set(key, query$)
    return query$
  }

  public getDownloadZipFromKgHref({ kgSchema = 'minds/core/dataset/v1.0.0', kgId }) {
    const _url = new URL(`${BACKENDURL.replace(/\/$/, '')}/datasets/downloadKgFiles`)
    const searchParam = _url.searchParams
    searchParam.set('kgSchema', kgSchema)
    searchParam.set('kgId', kgId)
    return _url.toString()
  }

  public showPreviewList(template: TemplateRef<any>) {
    this.store$.dispatch(
      uiStateShowBottomSheet({
        bottomSheetTemplate: template,
        config: {
          ariaLabel: `List of preview files`
        }
      })
    )
  }

  public previewFile(file: Partial<ViewerPreviewFile>, dataset: Partial<IDataEntry>) {
    this.store$.dispatch({
      type: DATASETS_ACTIONS_TYPES.PREVIEW_DATASET,
      payload: {
        file,
        dataset
      }
    })
  }

  public removeNgLayer({ url }) {
    this.store$.dispatch(
      ngViewerActionRemoveNgLayer({
        layer: { name: url }
      })
    )
  }
}

interface KgQueryInterface {
  kgSchema: string
  kgId: string
}
