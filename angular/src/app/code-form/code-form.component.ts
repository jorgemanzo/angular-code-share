import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharesService } from '../shares.service';
import { Share } from '../share';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-code-form',
  templateUrl: './code-form.component.html',
  styleUrls: ['./code-form.component.scss']
})
export class CodeFormComponent implements OnInit {

  public codeShare: Share = {
    code : "printf()",
    mutable : false
  };

  private disabledWhileEditing: string = "Submit (Disabled during edits)";
  private submitForCreate: string = "Submit";

  private disabledInShare: string = "Editing Disabled";
  private submitForUpdate: string = "Submit Change";

  public submitDisabled: boolean = !this.codeShare.mutable;
  public shareId: Number = null;
  public disabledMessage: string = "";
  public enabledMessage: string = "";

  public allowEdits: boolean = !this.shareId || this.codeShare.mutable;

  constructor(
    private sharesService: SharesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initByRouteParams();
  }

  setMutable(value: boolean): void {
    this.codeShare.mutable = value;
  }

  disableOnEdit(isEditing: boolean): void {
    this.submitDisabled = isEditing;
  }

  setCode(value): void {
    this.codeShare.code = value;
  }

  handleSubmit(): void {
    if(this.shareId > 0) {
      // or update
      if(this.codeShare.mutable) {
        this.sharesService.updateShare(this.codeShare, this.shareId).subscribe(
          res => console.log(res)
        );
      }
    }
    else {
      // Create
      this.sharesService.createShare(this.codeShare).subscribe(
        res => this.navigateToPresenter(res)
      );
    }
  }

  navigateToPresenter(res): void {
    console.log(res)
    if(res) {
      this.router.navigate(['share', { id: res }])
    }
  }

  initByRouteParams(): void {
    this.shareId = +this.route.snapshot.paramMap.get('id')
    if(this.shareId > 0) {
      this.disabledMessage = this.disabledInShare;
      this.enabledMessage = this.submitForUpdate;
      this.sharesService.getShareById(this.shareId).subscribe(
        res => {
          this.codeShare.mutable = res[0].mutable == "0" ? false : true;
          this.codeShare.code = res[0].code;
        }
      )
    }
    else {
      this.disabledMessage = this.disabledWhileEditing;
      this.enabledMessage = this.submitForCreate;
    }
  }
}
