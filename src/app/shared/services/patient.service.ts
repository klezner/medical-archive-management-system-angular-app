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
  private patientLocation = 'patient';

  constructor(private http:HttpClient) { }

  getPatients(): Observable<HttpResponse<Patient[]>> {
    return this.http.get<Patient[]>(`/api/${this.patientLocation}`, {observe: 'response'});
  }

  postPatient(patient: Patient): Observable<HttpResponse<Patient>> {
    return this.http.post<Patient>(`/api/${this.patientLocation}`, patient, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
