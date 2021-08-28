import {Component, OnInit} from '@angular/core';
import {ArchivecategoryRequest} from "../../shared/models/archivecategory-request";
import {ArchiveCategoryService} from "../../shared/services/archivecategory.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-archivecategory',
  templateUrl: './archivecategory.component.html',
  styleUrls: ['./archivecategory.component.css']
})
export class ArchiveCategoryComponent implements OnInit {
  archiveCategories: ArchivecategoryRequest[] | null = [];

  constructor(private archiveCategoryService: ArchiveCategoryService) {
  }

  ngOnInit(): void {
    this.getArchiveCategories();
  }

  getArchiveCategories(): void {
    this.archiveCategoryService.getArchiveCategories().subscribe(
      (response: HttpResponse<ArchivecategoryRequest[]>) => {
        this.archiveCategories = response.body;
        console.log('getArchiveCategories -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
