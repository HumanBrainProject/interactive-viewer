import { Component, OnInit, ViewChildren, QueryList, HostBinding } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { distinctUntilChanged, map, withLatestFrom, shareReplay, groupBy, mergeMap, toArray, switchMap, scan, filter, startWith } from "rxjs/operators";
import { Observable, Subscription, from, zip, of, combineLatest } from "rxjs";
import { viewerStateSelectTemplateWithId, viewerStateToggleLayer } from "src/services/state/viewerState.store.helper";
import { MatMenuTrigger } from "@angular/material/menu";
import { viewerStateGetSelectedAtlas, viewerStateAtlasLatestParcellationSelector, viewerStateSelectedTemplateFullInfoSelector, viewerStateSelectedTemplatePureSelector, viewerStateSelectedParcellationSelector } from "src/services/state/viewerState/selectors";
import { ARIA_LABELS } from 'common/constants'

@Component({
  selector: 'atlas-layer-selector',
  templateUrl: './atlasLayerSelector.template.html',
  styleUrls: ['./atlasLayerSelector.style.css'],
  exportAs: 'atlasLayerSelector'
})
export class AtlasLayerSelector implements OnInit {

    public TOGGLE_ATLAS_LAYER_SELECTOR = ARIA_LABELS.TOGGLE_ATLAS_LAYER_SELECTOR

    @ViewChildren(MatMenuTrigger) matMenuTriggers: QueryList<MatMenuTrigger>
    public atlas: any

    public nonGroupedLayers$: Observable<any[]>
    public groupedLayers$: Observable<any[]>

    public selectedTemplateSpaceId: string
    public selectedLayers = []

    public selectedTemplate$: Observable<any>
    private selectedParcellation$: Observable<any>
    public selectedAtlas$: Observable<any>
    private subscriptions: Subscription[] = []

    @HostBinding('attr.data-opened')
    public selectorExpanded: boolean = false
    public selectedTemplatePreviewUrl: string = ''

    public availableTemplates$: Observable<any[]>

    public containerMaxWidth: number

    constructor(private store$: Store<any>) {
      this.selectedAtlas$ = this.store$.pipe(
        select(viewerStateGetSelectedAtlas),
        distinctUntilChanged(),
        shareReplay(1)
      )

      this.availableTemplates$ = this.store$.pipe(
        select(viewerStateSelectedTemplateFullInfoSelector),
        map(v => v || []),
        startWith<any[]>([])
      )

      this.selectedTemplate$ = this.store$.pipe(
        select(viewerStateSelectedTemplatePureSelector),
        withLatestFrom(this.selectedAtlas$),
        map(([templateSelected, templateFromAtlas]) => {
          return {
            ...templateFromAtlas,
            ...templateSelected
          }
        })
      )
      this.selectedParcellation$ = this.store$.pipe(
        select(viewerStateSelectedParcellationSelector)
      )

      const layersGroupBy$ = this.selectedAtlas$.pipe(
        switchMap(selectedAtlas => from((selectedAtlas?.parcellations) || []).pipe(
          /**
           * do not show base layers
           */
          filter(p => !(p as any).baseLayer),
          groupBy((parcellation: any) => parcellation.groupName, p => p),
          mergeMap(group => zip(
            of(group.key),
            group.pipe(toArray()))
          ),
          scan((acc, curr) => acc.concat([ curr ]), []),
          shareReplay(1),
        ))
      )

      const atlasLayersLatest$ = this.store$.pipe(
        select(viewerStateAtlasLatestParcellationSelector),
        shareReplay(1),
      )

      this.nonGroupedLayers$ = atlasLayersLatest$.pipe(
        map(allParcellations => 
          allParcellations
            .filter(p => !p['groupName'])
            .filter(p => !p['baseLayer'])
        ),
        startWith<any[]>([])
      )

      this.groupedLayers$ = combineLatest([
        atlasLayersLatest$.pipe(
          map(allParcellations => 
            allParcellations.filter(p => !p['baseLayer'])
          ),
        ),
        layersGroupBy$
      ]).pipe(
        map(([ allParcellations, arr]) => arr
          .filter(([ key ]) => !!key )
          .map(([key, parcellations]) => ({
            name: key,
            previewUrl: parcellations[0].previewUrl,
            parcellations: parcellations.map(p => {
              const fullInfo = allParcellations.find(fullP => fullP['@id'] === p['@id']) || {}
              return {
                ...fullInfo,
                ...p,
                darktheme: (fullInfo || {}).useTheme === 'dark'
              }
            })
          }))
        ),
        startWith<any[]>([])
      )
    }

    ngOnInit(): void {
      this.subscriptions.push(
        this.selectedTemplate$.subscribe(st => {
          this.selectedTemplatePreviewUrl = st.templateSpaces?.find(t => t['@id'] === st['@id']).previewUrl
          this.selectedTemplateSpaceId = st['@id']
        }),
      )
      this.subscriptions.push(
        this.selectedParcellation$.subscribe(ps => {
          this.selectedLayers = (this.atlas && [this.atlas.parcellations.find(l => l['@id'] === ps['@id'])['@id']]) || []
        })
      )
      this.subscriptions.push(
        this.selectedAtlas$.subscribe(sa => {
          this.atlas = sa
        })
      )
    }

    selectTemplateWithName(template) {
      this.store$.dispatch(
        viewerStateSelectTemplateWithId({ payload: template })
      )
    }

    selectParcellationWithName(layer) {
      const templateChangeRequired = !this.currentTemplateIncludesLayer(layer)
      if (!templateChangeRequired) {
        this.store$.dispatch(
          viewerStateToggleLayer({ payload: layer })
        )
      } else {
        this.store$.dispatch(
          viewerStateSelectTemplateWithId({ payload: layer.availableIn[0], config: { selectParcellation: layer } })
        )
      }
    }

    currentTemplateIncludesLayer(layer) {
      return layer && layer.availableIn.map(a => a['@id']).includes(this.selectedTemplateSpaceId)
    }

    templateIncludesGroup(group) {
      return group.parcellations.some(v => v.availableIn.map(t => t['@id']).includes(this.selectedTemplateSpaceId))
    }

    selectedOneOfTheLayers(layers) {
      const includes = layers.map(l=>l['@id']).some(id=> this.selectedLayers.includes(id))
      return includes
    }

    selectedLayersIncludes(id) {
      return this.selectedLayers.includes(id)
    }

    collapseExpandedGroup(){
      this.matMenuTriggers.forEach(t => t.menuOpen && t.closeMenu())
    }

    getTileTmplClickFnAsCtx(fn: (...arg) => void, param: any) {
      return () => fn.call(this, param)
    }

    getTooltipText(layer) {
      if (this.atlas.templateSpaces.map(tmpl => tmpl['@id']).includes(layer['@id'])) return layer.name
      if (layer.availableIn) {
        if (this.currentTemplateIncludesLayer(layer)) return layer.name
        else {
          const firstAvailableRefSpaceId = layer && Array.isArray(layer.availableIn) && layer.availableIn.length > 0 && layer.availableIn[0]['@id']
          const firstAvailableRefSpace = firstAvailableRefSpaceId && this.atlas.templateSpaces.find(t => t['@id'] === firstAvailableRefSpaceId)
          return `${layer.name} 🔄 ${(firstAvailableRefSpace && firstAvailableRefSpace.name) || ''}`
        }
      }

      if (layer.parcellations) {
        if (this.templateIncludesGroup(layer)) return layer.name
        else return `${layer.name} 🔄`
      }
      
      return layer.name
    }

    trackbyAtId(t){
      return t['@id']
    }

    trackbyName(t) {
      return t['name']
    }
}
