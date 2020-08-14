import { Component, OnInit } from '@angular/core';
import { SharesService } from '../shares.service';
import { Share } from '../share';

@Component({
  selector: 'app-code-form',
  templateUrl: './code-form.component.html',
  styleUrls: ['./code-form.component.scss']
})
export class CodeFormComponent implements OnInit {

  mutable: boolean = false;
  submitDisabled: boolean = false;
  code: string = 'printf()';
  constructor(
    private sharesService: SharesService
  ) { }

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
    const value: Share = { code : this.code }
    this.sharesService.createShare(value).subscribe(
      res => console.log(res)
    );
  }

  getShares(): void {
    this.sharesService.getShares().subscribe(
      res => console.log(res)
    );
  }

  ngOnInit(): void {
    this.getShares();
  }

}
