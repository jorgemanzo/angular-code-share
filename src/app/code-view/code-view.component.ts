import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss']
})
export class CodeViewComponent implements OnInit {

  code: string = "printf()";
  lineCount: number[] = [1];
  constructor() { }

  ngOnInit(): void {
  }

  onCodeChange(): void {
    const num = this.code.split(/\n/).length;
    console.log(num)
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
