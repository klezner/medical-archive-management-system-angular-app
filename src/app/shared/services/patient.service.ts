import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {PatientResponse} from "../models/patient-response";
import {PatientRequest} from "../models/patient-request";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiServerUrl = environment.localApiUrl;
  private patientPath = 'patient';

  constructor(private http: HttpClient) {
  }

  getPatients(): Observable<HttpResponse<PatientResponse[]>> {
    return this.http.get<PatientResponse[]>(`${this.apiServerUrl}/${this.patientPath}`, {observe: 'response'});
  }

  postPatient(patient: PatientRequest): Observable<HttpResponse<PatientResponse>> {
    return this.http.post<PatientResponse>(`${this.apiServerUrl}/${this.patientPath}`, patient, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
