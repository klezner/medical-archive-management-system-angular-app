import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {WardRequest} from "../models/ward-request";
import {WardResponse} from "../models/ward-response";

@Injectable({
  providedIn: 'root'
})
export class WardService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'ward';

  constructor(private http: HttpClient) {
  }

  getWards(): Observable<HttpResponse<WardResponse[]>> {
    return this.http.get<WardResponse[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }

  postWard(ward: WardRequest): Observable<HttpResponse<WardResponse>> {
    return this.http.post<WardResponse>(`${this.apiServerUrl}/${this.locationPath}`, ward, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
