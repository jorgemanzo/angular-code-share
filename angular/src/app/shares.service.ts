import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Share } from './share';
@Injectable({
  providedIn: 'root'
})
export class SharesService {
  private readonly apiURL = '/ci-api/share';
  private readonly apiCreateEndPoint = "/create";
  private readonly apiGetById = "/get_by_id/?id=";
  constructor(
    private http: HttpClient
  ) { }

  getShares(): Observable<String> {
    return this.http.get<String>(this.apiURL);
  }

  createShare(share: Share): Observable<Share> {
    return this.http.post<Share>(this.apiURL + this.apiCreateEndPoint, share);
  }

  getShareById(id: number): Observable<Share> {
    return this.http.get<Share>(this.apiURL + this.apiGetById + id);
  }
}
