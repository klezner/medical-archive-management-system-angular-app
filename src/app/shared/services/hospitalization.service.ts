import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hospitalization} from "../models/hospitalization";

@Injectable({
  providedIn: 'root'
})
export class HospitalizationService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'hospitalization';

  constructor(private http: HttpClient) {
  }

  getHospitalizations(): Observable<HttpResponse<Hospitalization[]>> {
    return this.http.get<Hospitalization[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }
}
