import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Location} from "../models/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'location';

  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<HttpResponse<Location[]>> {
    return this.http.get<Location[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }
}
