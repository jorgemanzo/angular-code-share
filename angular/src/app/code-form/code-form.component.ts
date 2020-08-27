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

  public submitDisabled: boolean = false;
  public shareId: number = 0;
  public disabledMessage: string = "";
  public enabledMessage: string = "";

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

  shouldEdit(): boolean {
    if(!this.shareId) {
      return true;
    }
    else {
      return this.codeShare.mutable;
    }
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
          this.codeShare.mutable = res.mutable;
          this.submitDisabled = !this.codeShare.mutable;
          this.codeShare.code = res.code;
        }
      )
    }
    else {
      console.log("Init with no shareID")
      this.disabledMessage = this.disabledWhileEditing;
      this.enabledMessage = this.submitForCreate;
    }
  }
}
