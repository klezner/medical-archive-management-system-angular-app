import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {StaffResponse} from "../models/staff-response";
import {StaffRequest} from "../models/staff-request";

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'staff';

  constructor(private http: HttpClient) {
  }

  getStaff(): Observable<HttpResponse<StaffResponse[]>> {
    return this.http.get<StaffResponse[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }

  postStaff(staff: StaffRequest): Observable<HttpResponse<StaffResponse>> {
    return this.http.post<StaffRequest>(`${this.apiServerUrl}/${this.locationPath}`, staff, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
