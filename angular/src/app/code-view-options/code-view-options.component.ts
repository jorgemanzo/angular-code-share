import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-code-view-options',
  templateUrl: './code-view-options.component.html',
  styleUrls: ['./code-view-options.component.scss']
})
export class CodeViewOptionsComponent implements OnInit {

  @Output() mutableCheckboxEvent = new EventEmitter<boolean>();

  mutable: boolean = false;

  constructor() { }

  emitCheckboxValueEvent() {
    this.mutableCheckboxEvent.emit(this.mutable);
  }

  ngOnInit(): void {
  }

}
