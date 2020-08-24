import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Share } from './share';
@Injectable({
  providedIn: 'root'
})
export class SharesService {
  private readonly apiURL = 'http://localhost:8081';
  private readonly apiCreateEndPoint = "/create";
  private readonly apiUpdateEndPoint = "/update/?id=";
  private readonly apiGetById = "/get_by_id/?id=";
  constructor(
    private http: HttpClient
  ) { }

  shareToFormData(share: Share): FormData {
    const form: FormData = new FormData();
    form.append("code", share.code);
    form.append("mutable", share.mutable ? "1" : "0");
    return form;
  }
  
  getShares(): Observable<String> {
    return this.http.get<String>(this.apiURL);
  }

  createShare(share: Share): Observable<Share> {
    return this.http.post<Share>(this.apiURL + this.apiCreateEndPoint, this.shareToFormData(share));
  }

  updateShare(share: Share, shareId: Number) {
    return this.http.patch(this.apiURL + this.apiUpdateEndPoint + shareId, share);
  }

  getShareById(id: Number): Observable<Share> {
    return this.http.get<Share>(this.apiURL + this.apiGetById + id);
  }
}
