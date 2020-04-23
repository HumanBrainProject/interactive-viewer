import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Input, Inject } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { switchMapTo, takeUntil, filter } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";

@Directive({
  selector: '[iav-captureClickListenerDirective]',
})

export class CaptureClickListenerDirective implements OnInit, OnDestroy {

  @Input('iav-captureClickListenerDirective-captureDocument') captureDocument: boolean = false

  private subscriptions: Subscription[] = []
  @Output('iav-captureClickListenerDirective-onClick') public mapClicked: EventEmitter<any> = new EventEmitter()
  @Output('iav-captureClickListenerDirective-onMousedown') public mouseDownEmitter: EventEmitter<any> = new EventEmitter()

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  get element(){
    return this.captureDocument
      ? this.document
      : this.el.nativeElement
  }

  public ngOnInit() {
    const mouseDownObs$ = fromEvent(this.element, 'mousedown', { capture: true })
    const mouseMoveObs$ = fromEvent(this.element, 'mousemove', { capture: true })
    const mouseUpObs$ = fromEvent(this.element, 'mouseup', { capture: true })

    this.subscriptions.push(
      mouseDownObs$.subscribe(event => {
        this.mouseDownEmitter.emit(event)
      }),
      mouseDownObs$.pipe(
        switchMapTo(
          mouseUpObs$.pipe(
            takeUntil(mouseMoveObs$),
          ),
        ),
      ).subscribe(event => {
        this.mapClicked.emit(event)
      })
    )
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

}
