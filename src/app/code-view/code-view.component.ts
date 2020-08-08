import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss']
})
export class CodeViewComponent implements OnInit {

  code: string = "printf()";
  lineCount: number[] = [1];

  @Output() codeChangeEvent = new EventEmitter<string>();
  @Output() isEditingEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCodeChange(): void {
    this.emitCodeChangeEvent();
    this.updateLines();
  }

  onFocus(): void {
    this.isEditingEvent.emit(true);
  }

  onBlur(): void {
    this.isEditingEvent.emit(false);
  }

  emitCodeChangeEvent(): void {
    this.codeChangeEvent.emit(this.code);
  }

  updateLines(): void {
    const num = this.code.split(/\n/).length;
    if(num === 0) {
      this.lineCount = [1];
    } else {
      this.lineCount = [];
      for(let i = 0; i < num; i++) {
          this.lineCount.push(i+1);
      }
    }
  }
}
