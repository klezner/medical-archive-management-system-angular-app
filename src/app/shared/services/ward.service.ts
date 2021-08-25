import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ward} from "../models/ward";

@Injectable({
  providedIn: 'root'
})
export class WardService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'ward';

  constructor(private http: HttpClient) {
  }

  getWards(): Observable<HttpResponse<Ward[]>> {
    return this.http.get<Ward[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }

  postWard(ward: Ward): Observable<HttpResponse<Ward>> {
    return this.http.post<Ward>(`${this.apiServerUrl}/${this.locationPath}`, ward, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
