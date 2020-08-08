import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-form',
  templateUrl: './code-form.component.html',
  styleUrls: ['./code-form.component.scss']
})
export class CodeFormComponent implements OnInit {

  mutable: boolean = false;
  submitDisabled: boolean = false;
  code: string = 'printf()';
  constructor() { }

  setMutable(value: boolean): void {
    this.mutable = value;
  }

  disableOnEdit(isEditing: boolean): void {
    this.submitDisabled = isEditing;
  }

  setCode(value): void {
    this.code = value;
  }

  handleSubmit(): void {
    console.log('mutable: ', this.mutable);
    console.log('code: ', this.code);
  }

  ngOnInit(): void {
  }

}
