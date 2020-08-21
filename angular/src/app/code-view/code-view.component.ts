import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss']
})
export class CodeViewComponent implements OnInit {

  private readonly MAXCHARS: number = 500;

  public lineCount: number[] = [1];
  private _code = 'printf()';

  @Output() codeChangeEvent = new EventEmitter<string>();
  @Output() isEditingEvent = new EventEmitter<boolean>();

  @Input() mutable: boolean = true;
  @Input()
  get code(): string { return this._code; }
  set code(value: string) {
    this._code = value;
    this.updateLines();
  }

  constructor() { }

  ngOnInit(): void {
  }
  isDisabled(): boolean {
    return !this.mutable;
  }

  onCodeChange(): void {
    if(this.code.length > this.MAXCHARS) {
      this.code = this.code.slice(0, this.MAXCHARS);
    }
    this.emitCodeChangeEvent();
    this.updateLines();
  }

  onFocus(): void {
    this.isEditingEvent.emit(true);
  }

  onBlur(): void {
    if(this.code.length > 0) {
      this.isEditingEvent.emit(false);
    }
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
