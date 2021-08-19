import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "./patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiServerUrl = environment.localApiUrl;
  private patientLocation = 'patient';

  constructor(private http:HttpClient) { }

  getPatients(): Observable<HttpResponse<Patient[]>> {
    return this.http.get<Patient[]>(`${this.apiServerUrl}/${this.patientLocation}`, {observe: 'response'});
  }
}
