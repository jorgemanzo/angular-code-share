import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Share } from './share';
@Injectable({
  providedIn: 'root'
})
export class SharesService {
  private apiURL = '/ci-api/api';
  constructor(
    private http: HttpClient
  ) { }

  getShares(): Observable<String> {
    return this.http.get<String>(this.apiURL);
  }

  createShare(share: Share): Observable<Share> {
    return this.http.post<Share>(this.apiURL + "/create", share)
  }
}
