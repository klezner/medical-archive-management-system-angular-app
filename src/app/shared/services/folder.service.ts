import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {FolderResponse} from "../models/folder-response";
import {FolderRequest} from "../models/folder-request";

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

  postFolder(folder: FolderRequest): Observable<HttpResponse<FolderResponse>> {
    return this.http.post<FolderResponse>(`${this.apiServerUrl}/${this.locationPath}`, folder, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
