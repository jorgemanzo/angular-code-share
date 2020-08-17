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

  mutable: boolean = false;
  code: string = "code from api;";

  ngOnInit(): void {
    this.initByRouteParams();
  }

  initByRouteParams(): void {
    const routeId = +this.route.snapshot.paramMap.get('id')
    if(routeId > 0) {
      this.sharesService.getShareById(routeId).subscribe(
        res => {
          this.mutable = res[0].mutable == "0" ? false : true;
          this.code = res[0].code;
        }
      )
    }
  }
}
