import {Component, OnInit} from '@angular/core';
import {ArchiveCategory} from "../../shared/models/archivecategory";
import {ArchiveCategoryService} from "../../shared/services/archivecategory.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-archivecategory',
  templateUrl: './archivecategory.component.html',
  styleUrls: ['./archivecategory.component.css']
})
export class ArchivecategoryComponent implements OnInit {
  archiveCategories: ArchiveCategory[] | null = [];

  constructor(private archiveCategoryService: ArchiveCategoryService) {
  }

  ngOnInit(): void {
    this.getArchiveCategories();
  }

  getArchiveCategories(): void {
    this.archiveCategoryService.getArchiveCategories().subscribe(
      (response: HttpResponse<ArchiveCategory[]>) => {
        this.archiveCategories = response.body;
        console.log('getArchiveCategories -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
