import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {FolderResponse} from "../models/folder-response";

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'folder';

  constructor(private http: HttpClient) {
  }

  getFolders(): Observable<HttpResponse<FolderResponse[]>> {
    return this.http.get<FolderResponse[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }
}
