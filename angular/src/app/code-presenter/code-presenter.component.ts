import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-presenter',
  templateUrl: './code-presenter.component.html',
  styleUrls: ['./code-presenter.component.scss']
})
export class CodePresenterComponent implements OnInit {

  constructor() { }

  mutable: boolean = false;

  ngOnInit(): void {
  }

}
