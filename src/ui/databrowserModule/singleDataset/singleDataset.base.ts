import { ChangeDetectorRef, Input, TemplateRef, OnChanges, OnDestroy } from "@angular/core";
import { Observable, Subject, Subscription, combineLatest, BehaviorSubject } from "rxjs";
import { IDataEntry, IFile, IPublication } from 'src/services/state/dataStore.store'
import { HumanReadableFileSizePipe } from "src/util/pipes/humanReadableFileSize.pipe";
import { DatabrowserService } from "../databrowser.service";
import { KgSingleDatasetService } from "../kgSingleDatasetService.service";

import { DS_PREVIEW_URL } from 'src/util/constants'
import { getKgSchemaIdFromFullId } from "../util/getKgSchemaIdFromFullId.pipe";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ARIA_LABELS } from 'common/constants'
import { switchMap, distinctUntilChanged, filter, map, shareReplay, startWith } from "rxjs/operators";
import { IContributor } from "../contributor";
import { UNDER_REVIEW } from "../constants";
import { DatasetIsFavedPipe } from "../util/datasetIsFaved.pipe";

const getDirectLinkToKg = (dataset: { fullId: string, id: string }) => {
  const { id } = dataset
  if (id) return `https://kg.ebrains.eu/search/instances/Dataset/${encodeURIComponent(id)}`
  return null
}

export {
  DatabrowserService,
  KgSingleDatasetService,
  ChangeDetectorRef,
}

export class SingleDatasetBase implements OnChanges, OnDestroy {

  public SHOW_DATASET_PREVIEW_ARIA_LABEL = ARIA_LABELS.SHOW_DATASET_PREVIEW
  public PIN_DATASET_ARIA_LABEL = ARIA_LABELS.PIN_DATASET
  public EXPLORE_DATASET_IN_KG_ARIA_LABEL = ARIA_LABELS.EXPLORE_DATASET_IN_KG

  @Input() public ripple: boolean = false

  /**
   * the name/desc/publications are placeholder/fallback entries
   * while the actual data is being loaded from KG with kgSchema and kgId
   */
  @Input() public name?: string
  @Input() public description?: string
  @Input() public publications?: IPublication[]

  @Input() public contributors: IContributor[] = []

  public fetchFlag = false
  private _fullId: string

  @Input()
  set fullId(val){
    if (val === this._fullId) return
    const re = getKgSchemaIdFromFullId(val)
    if (re) {
      this._fullId = val
      this.kgSchema = re[0]
      this.kgId = re[1]
    }
  }

  get fullId(){
    return this._fullId || (this.kgSchema && this.kgId && `${this.kgSchema}/${this.kgId}`) || null
  }
  
  private _kgSchema: string = 'minds/core/dataset/v1.0.0'
  private kgSchema$: Subject<string> = new BehaviorSubject(null)

  @Input() 
  set kgSchema(val) {
    this._kgSchema = val
    this.kgSchema$.next(this._kgSchema)
  }

  get kgSchema(){
    return this._kgSchema
  }

  private _kgId: string
  private kgId$: Subject<string> = new BehaviorSubject(null)

  @Input()
  set kgId(val){
    this._kgId = val
    this.kgId$.next(this._kgId)
  }

  get kgId(){
    return this._kgId
  }

  @Input() public dataset: any = null
  @Input() public simpleMode: boolean = false

  public preview: boolean = false
  private humanReadableFileSizePipe: HumanReadableFileSizePipe = new HumanReadableFileSizePipe()

  public DS_PREVIEW_URL = DS_PREVIEW_URL
  public strictLocal: boolean = STRICT_LOCAL

  public isGdprProtected: boolean = false

  /**
   * sic!
   */
  public kgReference: string[] = []
  public directLinkToKg: string
  public files: IFile[] = []
  private methods: string[] = []

  private error: string = null

  public downloadInProgress = false

  public dlFromKgHref: string = null

  public selectedTemplateSpace$: Observable<any>

  public favedDataentries$: Observable<Partial<IDataEntry>[]>

  public isFav$: Observable<boolean>
  private dsIsFavPipe = new DatasetIsFavedPipe()

  constructor(
    private dbService: DatabrowserService,
    private singleDatasetService: KgSingleDatasetService,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    dataset?: any,
  ) {
    this.favedDataentries$ = this.dbService.favedDataentries$

    this.isFav$ = combineLatest([
      this.favedDataentries$,
      this.kgSchema$,
      this.kgId$,
    ]).pipe(
      map(([ favDs, kgSchema, kgId ]) => this.dsIsFavPipe.transform(favDs, { fullId: `${kgSchema}/${kgId}` })),
      startWith(false),
      shareReplay(1),
    )
    this.subscriptions.push(
      combineLatest([
        this.kgSchema$.pipe(
          distinctUntilChanged(),
          filter(v => !!v)
        ),
        this.kgId$.pipe(
          distinctUntilChanged(),
          filter(v => !!v)
        )
      ]).pipe(
        switchMap(([kgSchema, kgId]) => {
          this.fetchFlag = true
          this.cdr.markForCheck()
          return this.singleDatasetService.getInfoFromKg({ kgSchema, kgId })
        })
      ).subscribe(
        dataset => {
          if (!dataset) return

          const { kgSchema, kgId } = this

          const { name, description, publications, fullId, kgReference, files, contributors, embargoStatus, ...rest } = dataset
          this.name = name
          this.description = description
          this.publications = publications
          this.contributors = contributors
          this.files = files
          this.fullId = fullId

          this.isGdprProtected = embargoStatus && embargoStatus.some(s => s['@id'] === UNDER_REVIEW['@id'])

          this.kgReference = kgReference
          this.directLinkToKg = getDirectLinkToKg(dataset)

          this.dlFromKgHref = this.singleDatasetService.getDownloadZipFromKgHref({ kgSchema, kgId })
          
          this.fetchFlag = false
          this.cdr.markForCheck()
        },
        err => {
          this.fetchFlag = false
          
          this.name = `[This dataset cannot be fetched right now]`
          this.description = ` `
          this.cdr.markForCheck()
        }
      )
    )
    
    /**
     * opened via mat-dialog
     */

    if (dataset) {
      const { fullId, name, description } = dataset
      if (fullId) {

        const obj = getKgSchemaIdFromFullId(fullId)
        if (obj) {
          const [ kgSchema, kgId ] = obj
          this.kgSchema = kgSchema
          this.kgId = kgId
          return
        }
      }

      this.name = name
      this.description = description
    }
  }

  public hasPreview = false
  public previewFiles = []

  handleKgDsPrvUpdate(event: CustomEvent){
    this.hasPreview = false
    this.previewFiles = []
    const { detail } = event
    const { datasetFiles } = detail
    if (datasetFiles && Array.isArray(datasetFiles) && datasetFiles.length > 0) {
      this.hasPreview = true
      this.previewFiles = datasetFiles
    }
  }

  // TODO this is not perfect logic for singledataset
  // singledataset.base.ts should be tidied up in general
  // fullId, kgId, dataset... too many different entries

  public ngOnChanges(){
    if (!this.kgId) {
      const fullId = this.fullId || this.dataset?.fullId

      const re = getKgSchemaIdFromFullId(fullId)
      if (re) {
        this.kgSchema = re[0]
        this.kgId = re[1]
      }
    }
  }

  private subscriptions: Subscription[] = []

  public ngOnDestroy(){
    while(this.subscriptions.length > 0) this.subscriptions.pop().unsubscribe()
  }

  get downloadEnabled() {
    return this.kgSchema && this.kgId
  }

  get numOfFiles() {
    return this.files
      ? this.files.length
      : null
  }

  get totalFileByteSize() {
    return this.files
      ? this.files.reduce((acc, curr) => acc + curr.byteSize, 0)
      : null
  }

  get tooltipText() {
    return `${this.numOfFiles} files ~ ${this.humanReadableFileSizePipe.transform(this.totalFileByteSize)}`
  }

  get showFooter() {
    return (this.kgReference && this.kgReference.length > 0)
      || (this.publications && this.publications.length > 0)
      || (this.files && this.files.length > 0)
  }

  public toggleFav() {
    this.dbService.toggleFav({ fullId: this.fullId })
  }

  public showPreviewList(templateRef: TemplateRef<any>) {
    this.singleDatasetService.showPreviewList(templateRef)
  }

  public undoableRemoveFav() {
    this.snackBar.open(`Unpinned dataset: ${this.name}`, 'Undo', {
      duration: 5000,
      politeness: "polite"
    })
      .afterDismissed()
      .subscribe(({ dismissedByAction }) => {
        if (dismissedByAction) {
          this.dbService.saveToFav({ fullId: this.fullId})
        }
      })
    this.dbService.removeFromFav({ fullId: this.fullId})
  }

  public undoableAddFav() {
    this.snackBar.open(`Pinned dataset: ${this.name}`, 'Undo', {
      duration: 5000,
      politeness: "polite"
    })
      .afterDismissed()
      .subscribe(({ dismissedByAction }) => {
        if (dismissedByAction) {
          this.dbService.removeFromFav({ fullId: this.fullId})
        }
      })
    this.dbService.saveToFav({ fullId: this.fullId })
  }
}
