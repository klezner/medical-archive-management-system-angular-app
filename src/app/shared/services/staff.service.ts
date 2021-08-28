import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Staff} from "../models/staff";

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'staff';

  constructor(private http: HttpClient) {
  }

  getStaff(): Observable<HttpResponse<Staff[]>> {
    return this.http.get<Staff[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }
}
