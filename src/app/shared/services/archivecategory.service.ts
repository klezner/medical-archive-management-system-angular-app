import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArchivecategoryRequest} from "../models/archivecategory-request";
import {ArchiveCategoryResponse} from "../models/archivecategory-response";

@Injectable({
  providedIn: 'root'
})
export class ArchiveCategoryService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'archiveCategory';

  constructor(private http: HttpClient) {
  }

  getArchiveCategories(): Observable<HttpResponse<ArchiveCategoryResponse[]>> {
    return this.http.get<ArchiveCategoryResponse[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }

  postArchiveCategory(archiveCategory: ArchivecategoryRequest): Observable<HttpResponse<ArchiveCategoryResponse>> {
    return this.http.post<ArchiveCategoryResponse>(`${this.apiServerUrl}/${this.locationPath}`, archiveCategory, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
