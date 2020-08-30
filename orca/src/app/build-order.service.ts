import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuildOrder } from './build-order'
import { ExecutionMessage } from './execution-message'

@Injectable({
  providedIn: 'root'
})
export class BuildOrderService {
  private readonly apiURL = 'http://localhost:8081';
  private readonly apiSubmitBuildOrder = '/submit_build_order';

  constructor(
    private http: HttpClient
  ) { }

  objectToFormData(obj: Object): FormData {
    let formData = new FormData();
    let keys = Object.keys(obj);
    for(let key of keys) {
      formData.append(key, obj[key]);
    }
    console.log(formData)
    return formData;
  }

  submitBuildOrder(buildOrder: BuildOrder): Observable<ExecutionMessage> {
    return this.http.post<ExecutionMessage>(this.apiURL + this.apiSubmitBuildOrder, JSON.stringify(buildOrder));
  }
}
