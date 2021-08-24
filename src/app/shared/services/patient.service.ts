import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../models/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiServerUrl = environment.localApiUrl;
  private patientPath = 'patient';

  constructor(private http:HttpClient) { }

  getPatients(): Observable<HttpResponse<Patient[]>> {
    return this.http.get<Patient[]>(`${this.apiServerUrl}/${this.patientPath}`, {observe: 'response'});
  }

  postPatient(patient: Patient): Observable<HttpResponse<Patient>> {
    return this.http.post<Patient>(`${this.apiServerUrl}/${this.patientPath}`, patient, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
