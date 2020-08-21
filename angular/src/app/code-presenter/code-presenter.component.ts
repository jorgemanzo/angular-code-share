import { Component, OnInit } from '@angular/core';
import { SharesService } from '../shares.service';
import { Share } from '../share';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-code-presenter',
  templateUrl: './code-presenter.component.html',
  styleUrls: ['./code-presenter.component.scss']
})
export class CodePresenterComponent implements OnInit {

  constructor(
    private sharesService: SharesService,
    private route: ActivatedRoute
  ) { }

  public codeShare: Share = {
    code : "code from api;",
    mutable : false
  };

  public submitDisabled: Boolean = this.codeShare.mutable;
  private shareId: Number = null;

  ngOnInit(): void {
    this.initByRouteParams();
  }

  handleSubmit(): void {
    if(this.codeShare.mutable) {
      this.sharesService.updateShare(this.codeShare, this.shareId).subscribe(
        res => console.log(res)
      );
    }
  }

  initByRouteParams(): void {
    this.shareId = +this.route.snapshot.paramMap.get('id')
    if(this.shareId > 0) {
      this.sharesService.getShareById(this.shareId).subscribe(
        res => {
          this.codeShare.mutable = res[0].mutable == "0" ? false : true;
          this.codeShare.code = res[0].code;
        }
      )
    }
  }
}
