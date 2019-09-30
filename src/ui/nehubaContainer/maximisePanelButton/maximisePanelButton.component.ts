import { Component, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";
import { SINGLE_PANEL } from "src/services/state/ngViewerState.store";

@Component({
  selector: 'maximise-panel-button',
  templateUrl: './maximisePanelButton.template.html',
  styleUrls: [
    './maximisePanelButton.style.css'
  ]
})

export class MaximmisePanelButton{
  
  @Input() panelIndex: number

  private panelMode$: Observable<string>
  private panelOrder$: Observable<string>

  public isMaximised$: Observable<boolean>

  constructor(
    private store$: Store<any>
  ){
    this.panelMode$ = this.store$.pipe(
      select('ngViewerState'),
      select('panelMode'),
      distinctUntilChanged()
    )

    this.panelOrder$ = this.store$.pipe(
      select('ngViewerState'),
      select('panelOrder'),
      distinctUntilChanged()
    )

    this.isMaximised$ = this.panelMode$.pipe(
      map(panelMode => panelMode === SINGLE_PANEL)
    )
  }
}