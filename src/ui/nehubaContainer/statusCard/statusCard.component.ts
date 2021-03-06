import { Component, Input, OnInit, OnChanges, TemplateRef, HostBinding } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { LoggingService } from "src/logging";
import { IavRootStoreInterface } from "src/services/stateStore.service";
import { NehubaViewerUnit } from "../nehubaViewer/nehubaViewer.component";
import { Observable, Subscription, of, combineLatest } from "rxjs";
import { map, filter, startWith } from "rxjs/operators";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatDialog } from "@angular/material/dialog";
import { ARIA_LABELS } from 'common/constants'
import { PureContantService } from "src/util";
import { FormControl } from "@angular/forms";
import { viewerStateNavigationStateSelector, viewerStateSelectedTemplatePureSelector } from "src/services/state/viewerState/selectors";
import { getNavigationStateFromConfig } from "../util";
import { viewerStateChangeNavigation } from "src/services/state/viewerState/actions";

@Component({
  selector : 'ui-status-card',
  templateUrl : './statusCard.template.html',
  styleUrls : ['./statusCard.style.css'],
})
export class StatusCardComponent implements OnInit, OnChanges{

  @Input() public selectedTemplateName: string;
  @Input() public nehubaViewer: NehubaViewerUnit;

  @HostBinding('attr.aria-label')
  public arialabel = ARIA_LABELS.STATUS_PANEL
  public showFull = false

  private selectedTemplatePure: any
  private currentNavigation: any
  private subscriptions: Subscription[] = []

  public navVal$: Observable<string>
  public mouseVal$: Observable<string>

  public useTouchInterface$: Observable<boolean>

  public SHARE_BTN_ARIA_LABEL = ARIA_LABELS.SHARE_BTN
  public COPY_URL_TO_CLIPBOARD_ARIA_LABEL = ARIA_LABELS.SHARE_COPY_URL_CLIPBOARD
  public SHARE_CUSTOM_URL_ARIA_LABEL = ARIA_LABELS.SHARE_CUSTOM_URL
  public SHARE_CUSTOM_URL_DIALOG_ARIA_LABEL = ARIA_LABELS.SHARE_CUSTOM_URL_DIALOG
  public SHOW_FULL_STATUS_PANEL_ARIA_LABEL = ARIA_LABELS.SHOW_FULL_STATUS_PANEL
  public HIDE_FULL_STATUS_PANEL_ARIA_LABEL = ARIA_LABELS.HIDE_FULL_STATUS_PANEL
  constructor(
    private store$: Store<IavRootStoreInterface>,
    private log: LoggingService,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
    private pureConstantService: PureContantService
  ) {
    this.useTouchInterface$ = this.pureConstantService.useTouchUI$
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.statusPanelFormCtrl.valueChanges.subscribe(val => {
        this.statusPanelRealSpace = val
      })
    )

    this.subscriptions.push(
      this.store$.pipe(
        select(viewerStateSelectedTemplatePureSelector)
      ).subscribe(n => this.selectedTemplatePure = n)
    )

    this.subscriptions.push(
      this.store$.pipe(
        select(viewerStateNavigationStateSelector)
      ).subscribe(nav => this.currentNavigation = nav)
    )
  }

  ngOnChanges() {
    if (!this.nehubaViewer) {
      this.navVal$ = of(`neubaViewer is undefined`)
      this.mouseVal$ = of(`neubaViewer is undefined`)
      return
    }
    this.navVal$ = combineLatest([
      this.statusPanelRealSpace$,
      this.nehubaViewer.viewerPosInReal$.pipe(
        filter(v => !!v)
      ),
      this.nehubaViewer.viewerPosInVoxel$.pipe(
        filter(v => !!v)
      )
    ]).pipe(
      map(([realFlag, real, voxel]) => realFlag
        ? real.map(v => `${ (v / 1e6).toFixed(3) }mm`).join(', ')
        : voxel.map(v => v.toFixed(3)).join(', ') ),
      startWith(`nehubaViewer initialising`)
    )

    this.mouseVal$ = combineLatest([
      this.statusPanelRealSpace$,
      this.nehubaViewer.mousePosInReal$.pipe(
        filter(v => !!v)
      ),
      this.nehubaViewer.mousePosInVoxel$.pipe(
        filter(v => !!v)
      )
    ]).pipe(
      map(([realFlag, real, voxel]) => realFlag
        ? real.map(v => `${ (v/1e6).toFixed(3) }mm`).join(', ')
        : voxel.map(v => v.toFixed(3)).join(', ')),
      startWith(``)
    )
  }

  public statusPanelFormCtrl = new FormControl(true, [])
  public statusPanelRealSpace = true
  public statusPanelRealSpace$ = this.statusPanelFormCtrl.valueChanges.pipe(
    startWith(true)
  )

  public textNavigateTo(string: string) {
    if (string.split(/[\s|,]+/).length >= 3 && string.split(/[\s|,]+/).slice(0, 3).every(entry => !isNaN(Number(entry.replace(/mm/, ''))))) {
      const pos = (string.split(/[\s|,]+/).slice(0, 3).map((entry) => Number(entry.replace(/mm/, '')) * (this.statusPanelRealSpace ? 1000000 : 1)))
      this.nehubaViewer.setNavigationState({
        position : (pos as [number, number, number]),
        positionReal : this.statusPanelRealSpace,
      })
    } else {
      this.log.log('input did not parse to coordinates ', string)
    }
  }

  showBottomSheet(tmpl: TemplateRef<any>){
    this.bottomSheet.open(tmpl)
  }

  /**
   * TODO
   * maybe have a nehuba manager service
   * so that reset navigation logic can stay there
   *
   * When that happens, we don't even need selectTemplate input
   *
   * the info re: nehubaViewer can stay there, too
   */
  public resetNavigation({rotation: rotationFlag = false, position: positionFlag = false, zoom : zoomFlag = false}: {rotation?: boolean, position?: boolean, zoom?: boolean}) {
    const {
      orientation,
      perspectiveOrientation,
      perspectiveZoom,
      position,
      zoom
    } = getNavigationStateFromConfig(this.selectedTemplatePure.nehubaConfig)

    this.store$.dispatch(
      viewerStateChangeNavigation({
        navigation: {
          ...this.currentNavigation,
          ...(rotationFlag ? { orientation: orientation } : {}),
          ...(positionFlag ? { position: position } : {}),
          ...(zoomFlag ? { zoom: zoom } : {}),
          positionReal : false,
          animation : {},
        }
      })
    )
  }

  openDialog(tmpl: TemplateRef<any>, options) {
    const { ariaLabel } = options
    this.dialog.open(tmpl, {
      ariaLabel
    })
  }
}
