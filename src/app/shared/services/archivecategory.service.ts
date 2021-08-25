import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArchiveCategory} from "../models/archivecategory";

@Injectable({
  providedIn: 'root'
})
export class ArchiveCategoryService {
  private apiServerUrl = environment.localApiUrl;
  private locationPath = 'archiveCategory';

  constructor(private http: HttpClient) {
  }

  getArchiveCategories(): Observable<HttpResponse<ArchiveCategory[]>> {
    return this.http.get<ArchiveCategory[]>(`${this.apiServerUrl}/${this.locationPath}`, {observe: 'response'});
  }

  postArchiveCategory(archiveCategory: ArchiveCategory): Observable<HttpResponse<ArchiveCategory>> {
    return this.http.post<ArchiveCategory>(`${this.apiServerUrl}/${this.locationPath}`, archiveCategory, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
