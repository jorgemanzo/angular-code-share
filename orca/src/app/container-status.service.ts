import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContainerStatus } from './container-status'
@Injectable({
  providedIn: 'root'
})
export class ContainerStatusService {
  private readonly apiURL = 'http://localhost:8081';
  private readonly apiGetStatusForAll = '/get_status_for_all';
  constructor(
    private http: HttpClient
  ) { }

  getStatusForAll(): Observable<ContainerStatus> {
    return this.http.get<ContainerStatus>(this.apiURL + this.apiGetStatusForAll);
  }
}
