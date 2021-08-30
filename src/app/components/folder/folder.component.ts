import { Component, OnInit } from '@angular/core';
import {FolderResponse} from "../../shared/models/folder-response";
import {FolderService} from "../../shared/services/folder.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  folders: FolderResponse[] | null = [];

  constructor(private folderService: FolderService) { }

  ngOnInit(): void {
    this.getFolders();
  }

  getFolders(): void {
    this.folderService.getFolders().subscribe(
      (response: HttpResponse<FolderResponse[]>) => {
        this.folders = response.body;
        console.log('getFolders -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };
}
