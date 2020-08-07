import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss']
})
export class CodeViewComponent implements OnInit {

  code = "printf()";
  
  constructor() { }

  ngOnInit(): void {
  }

}
