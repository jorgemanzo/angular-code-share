import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharesService {
  private apiURL = '/ci-api/query';
  constructor(
    private http: HttpClient
  ) { }

  getShares(): Observable<String> {
    return this.http.get<String>(this.apiURL);
  }
}
