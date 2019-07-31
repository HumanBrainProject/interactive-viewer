import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'pill-component',
  templateUrl: './pill.template.html',
  styleUrls: [
    './pill.style.css'
  ]
})

export class PillComponent{
  @Input() title: string = 'Untitled Pill'
  @Input() showClose: boolean = true
  @Output() pillClicked: EventEmitter<boolean> = new EventEmitter()
  @Output() closeClicked: EventEmitter<{userInitiated:boolean, event: MouseEvent}> = new EventEmitter()

  @Input() containerStyle: any = {
    backgroundColor: 'grey'
  }
  @Input() closeBtnStyle: any = {
    backgroundColor: 'lightgrey'
  }

  close(event) {
    this.closeClicked.emit({userInitiated:true, event: event})
  }
}