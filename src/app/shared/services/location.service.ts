import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocationResponse} from "../models/location-response";
import {LocationRequest} from "../models/location-request";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'location';

  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<HttpResponse<LocationResponse[]>> {
    return this.http.get<LocationResponse[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }

  postLocation(location: LocationRequest): Observable<HttpResponse<LocationResponse>> {
    return this.http.post<LocationResponse>(`${this.apiServerUrl}/${this.locationPath}`, location, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
