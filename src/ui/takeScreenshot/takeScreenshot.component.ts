import {DOCUMENT} from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  HostListener,
  Inject, OnDestroy,
  OnInit, Output,
  Renderer2,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import html2canvas from "html2canvas";

@Component({
  selector: 'take-screenshot',
  templateUrl: './takeScreenshot.template.html',
  styleUrls: ['./takeScreenshot.style.css'],
})

export class TakeScreenshotComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    if (this.resettingScreenshotTaking) this.resetScreenshot.emit(true)
    this.resettingScreenshotTaking = false
  }

    @ViewChild('screenshotPreviewCard', {read: ElementRef}) public screenshotPreviewCard: ElementRef
    @ViewChild('previewImageDialog', {read: TemplateRef}) public previewImageDialogTemplateRef: TemplateRef<any>

    @Output() screenshotTaking: EventEmitter<boolean> = new EventEmitter<boolean>()
    @Output() resetScreenshot: EventEmitter<boolean> = new EventEmitter<boolean>()

    private resettingScreenshotTaking: boolean = false

    private dialogRef: MatDialogRef<any>

    public takingScreenshot: boolean = false
    public previewingScreenshot: boolean = false
    public loadingScreenshot: boolean = false

    public screenshotName: string = `screenshot.png`
    private croppedCanvas = null

    public mouseIsDown = false
    public isDragging = false

    // Used to calculate where to start showing the dragging area
    private startX: number = 0
    private startY: number = 0
    private endX: number = 0
    private endY: number = 0

    public borderWidth: string = ''
    // The box that contains the border and all required numbers.
    public boxTop: number = 0
    public boxLeft: number = 0
    public boxEndWidth: number = 0
    public boxEndHeight: number = 0

    private windowHeight: number = 0
    private windowWidth: number = 0

    private screenshotStartX: number = 0
    private screenshotStartY: number = 0

    public imageUrl: string

    constructor(
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: any,
        private matDialog: MatDialog,
        private cdr: ChangeDetectorRef,
    ) {}

    public ngOnInit(): void {
      this.windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

      this.startScreenshot()

    }

    @HostListener('window:resize', ['$event'])
    public onResize() {
      this.windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    @HostListener('window:keyup', ['$event'])
    public keyEvent(event: KeyboardEvent) {
      if (this.takingScreenshot && event.key === 'Escape') {
        this.cancelTakingScreenshot()
      }
    }

    public startScreenshot() {
      this.previewingScreenshot = false
      this.croppedCanvas = null
      this.loadingScreenshot = false
      this.takingScreenshot = true
    }

    public move(e: MouseEvent) {
      if (this.mouseIsDown) {
        this.isDragging = true

        this.endY = e.clientY
        this.endX = e.clientX

        if (this.endX >= this.startX && this.endY >= this.startY) {
          // III quadrant
          this.borderWidth = this.startY + 'px '
                    + (this.windowWidth - this.endX) + 'px '
                    + (this.windowHeight - this.endY) + 'px '
                    + this.startX + 'px'
          this.boxTop = this.startY
          this.boxLeft = this.startX
          this.boxEndWidth = this.endX - this.startX
          this.boxEndHeight = this.endY - this.startY

          this.screenshotStartX = this.startX
          this.screenshotStartY = this.startY

        } else if (this.endX <= this.startX && this.endY >= this.startY) {
          // IV quadrant

          this.borderWidth = this.startY + 'px '
                    + (this.windowWidth - this.startX) + 'px '
                    + (this.windowHeight - this.endY) + 'px '
                    + this.endX + 'px'

          this.boxLeft = this.endX
          this.boxTop = this.startY
          this.boxEndWidth = this.startX - this.endX
          this.boxEndHeight = this.endY - this.startY

          this.screenshotStartX = this.endX
          this.screenshotStartY = this.startY

        } else if (this.endX >= this.startX && this.endY <= this.startY) {

          // II quadrant

          this.borderWidth = this.endY + 'px '
                    + (this.windowWidth - this.endX) + 'px '
                    + (this.windowHeight - this.startY) + 'px '
                    + this.startX + 'px'

          this.boxLeft = this.startX
          this.boxTop = this.endY
          this.boxEndWidth = this.endX - this.startX
          this.boxEndHeight = this.startY - this.endY

          this.screenshotStartX = this.startX
          this.screenshotStartY = this.endY

        } else if (this.endX <= this.startX && this.endY <= this.startY) {
          // I quadrant

          this.boxLeft = this.endX
          this.boxTop = this.endY
          this.boxEndWidth = this.startX - this.endX
          this.boxEndHeight = this.startY - this.endY

          this.borderWidth = this.endY + 'px '
                    + (this.windowWidth - this.startX) + 'px '
                    + (this.windowHeight - this.startY) + 'px '
                    + this.endX + 'px'

          this.screenshotStartX = this.endX
          this.screenshotStartY = this.endY

        } else {
          this.isDragging = false
        }

      }
    }

    public mouseDown(event: MouseEvent) {
      this.borderWidth = this.windowWidth + 'px ' + this.windowHeight + 'px'

      this.startX = event.clientX
      this.startY = event.clientY

      this.mouseIsDown = true
    }

    public mouseUp(_event: MouseEvent) {
      (window as any).viewer.display.update()
      this.borderWidth = '0'

      this.isDragging = false
      this.mouseIsDown = false

      this.takingScreenshot = false

      if (this.boxEndWidth * window.devicePixelRatio <= 1 && this.boxEndHeight * window.devicePixelRatio <= 1) {
        this.cancelTakingScreenshot()
      } else {
        this.loadScreenshot()
      }

    }

    public loadScreenshot() {

      this.loadingScreenshot = true
      this.dialogRef = this.matDialog.open(this.previewImageDialogTemplateRef, {
        autoFocus: false,
      })
      this.dialogRef.afterClosed().toPromise()
        .then(result => {
          switch (result) {
          case 'again': {
            this.restartScreenshot()
            this.startScreenshot()
            this.cdr.markForCheck()
            break
          }
          case 'cancel': {
            this.cancelTakingScreenshot()
            break
          }
          default: this.cancelTakingScreenshot()
          }
        })

      html2canvas(this.document.querySelector('#neuroglancer-container canvas')).then(canvas => {
        this.croppedCanvas = null
        this.croppedCanvas = this.renderer.createElement('canvas')

        this.croppedCanvas.width = this.boxEndWidth * window.devicePixelRatio
        this.croppedCanvas.height = this.boxEndHeight * window.devicePixelRatio

        this.croppedCanvas.getContext('2d')
          .drawImage(canvas,
            this.screenshotStartX * window.devicePixelRatio, this.screenshotStartY * window.devicePixelRatio,
            this.boxEndWidth * window.devicePixelRatio, this.boxEndHeight * window.devicePixelRatio,
            0, 0,
            this.boxEndWidth * window.devicePixelRatio, this.boxEndHeight * window.devicePixelRatio)
      }).then(() => {

        const d = new Date()
        const n = `${d.getFullYear()}_${d.getMonth() + 1}_${d.getDate()}_${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}`
        this.screenshotName = `${n}_IAV.png`

        this.loadingScreenshot = false
        this.imageUrl = this.croppedCanvas.toDataURL('image/png')
        this.previewingScreenshot = true
        this.clearStateAfterScreenshot()

        this.cdr.markForCheck()
      })
    }

    public restartScreenshot() {
      this.resettingScreenshotTaking = true
      this.resetScreenshot.emit(false)
    }

    public cancelTakingScreenshot() {
      this.screenshotTaking.emit(false)
    }

    public clearStateAfterScreenshot() {
      this.mouseIsDown = false
      this.isDragging = false
      this.startX = 0
      this.startY = 0
      this.endX = 0
      this.endY = 0
      this.borderWidth = ''
      this.boxTop = 0
      this.boxLeft = 0
      this.boxEndWidth = 0
      this.boxEndHeight = 0
      this.windowHeight = 0
      this.windowWidth = 0
      this.screenshotStartX = 0
      this.screenshotStartY = 0
    }
}
