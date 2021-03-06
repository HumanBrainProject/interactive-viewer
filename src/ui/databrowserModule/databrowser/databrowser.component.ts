import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { LoggingService } from "src/logging";
import { IDataEntry } from "src/services/state/dataStore.store";
import { CountedDataModality, DatabrowserService } from "../databrowser.service";
import { ModalityPicker } from "../modalityPicker/modalityPicker.component";
import { ARIA_LABELS } from 'common/constants.js'
import { DatabrowserBase } from "./databrowser.base";
import { debounceTime } from "rxjs/operators";
import { OVERWRITE_SHOW_DATASET_DIALOG_TOKEN, TOverwriteShowDatasetDialog } from "src/util/interfaces";
import { Store } from "@ngrx/store";
import { uiActionShowDatasetWtihId } from "src/services/state/uiState/actions";

const { MODALITY_FILTER, LIST_OF_DATASETS } = ARIA_LABELS

@Component({
  selector : 'data-browser',
  templateUrl : './databrowser.template.html',
  styleUrls : [
    `./databrowser.style.css`,
  ],
  exportAs: 'dataBrowser',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [

    {
      provide: OVERWRITE_SHOW_DATASET_DIALOG_TOKEN,
      useFactory: (store: Store<any>) => {
        return function overwriteShowDatasetDialog( arg: { fullId?: string, name: string, description: string } ){
          if (arg.fullId) {
            store.dispatch(
              uiActionShowDatasetWtihId({
                id: arg.fullId
              })
            )
          }
        } as TOverwriteShowDatasetDialog
      },
      deps: [
        Store
      ]
    }
  ]
  
})

export class DataBrowser extends DatabrowserBase implements OnDestroy, OnInit {

  @Input()
  disableVirtualScroll: boolean = false

  @Input()
  showList: boolean = true

  public MODALITY_FILTER_ARIA_LABEL = MODALITY_FILTER
  public LIST_OF_DATASETS_ARIA_LABEL = LIST_OF_DATASETS


  /**
   * TODO filter types
   */
  private subscriptions: Subscription[] = []
  public countedDataM: CountedDataModality[] = []
  public visibleCountedDataM: CountedDataModality[] = []

  @ViewChild(ModalityPicker)
  public modalityPicker: ModalityPicker


  /**
   * TODO
   * viewport
   * user defined filter
   * etc
   */
  public gemoetryFilter: any

  constructor(
    private dataService: DatabrowserService,
    private cdr: ChangeDetectorRef,
    log: LoggingService,
  ) {
    super(dataService, log)
  }

  public ngOnInit() {

    /**
     * in the event that dataentries are updated before ngInit lifecycle hook
     */
    this.countedDataM = this.dataService.getModalityFromDE(this.dataentries)

    this.subscriptions.push(
      this.dataentriesUpdated.pipe(
        debounceTime(60)
      ).subscribe(() => {
        this.countedDataM = this.dataService.getModalityFromDE(this.dataentries)
        this.cdr.markForCheck()
      })
    )
    
    /**
     * TODO gets init'ed everytime when appends to ngtemplateoutlet
     */
    this.dataService.dbComponentInit(this)

    /**
     * TODO fix
     */
    // this.subscriptions.push(
    //   this.filterApplied$.subscribe(() => this.currentPage = 0)
    // )
  }

  public ngOnDestroy() {
    super.ngOnDestroy()
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  public clearAll() {
    this.countedDataM = this.countedDataM.map(cdm => {
      return {
        ...cdm,
        visible: false,
      }
    })
    this.visibleCountedDataM = []
  }

  public handleModalityFilterEvent(modalityFilter: CountedDataModality[]) {
    this.countedDataM = modalityFilter
    this.visibleCountedDataM = modalityFilter.filter(dm => dm.visible)
    this.cdr.markForCheck()
  }

  public showParcellationList: boolean = false

  public filePreviewName: string
  public onShowPreviewDataset(payload: {datasetName: string, event: MouseEvent}) {
    const { datasetName } = payload
    this.filePreviewName = datasetName
  }

  public resetFilters(_event?: MouseEvent) {
    this.clearAll()
  }

  public trackByFn(index: number, dataset: IDataEntry) {
    return dataset.id
  }
}

export interface IDataEntryFilter {
  filter: (dataentries: IDataEntry[]) => IDataEntry[]
}
