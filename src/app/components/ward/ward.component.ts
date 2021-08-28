import {Component, OnInit} from '@angular/core';
import {WardRequest} from "../../shared/models/ward-request";
import {WardService} from "../../shared/services/ward.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrls: ['./ward.component.css']
})
export class WardComponent implements OnInit {
  wards: WardRequest[] | null = [];

  constructor(private wardService: WardService) {
  }

  ngOnInit(): void {
    this.getWards();
  }

  getWards(): void {
    this.wardService.getWards().subscribe(
      (response: HttpResponse<WardRequest[]>) => {
        this.wards = response.body;
        console.log('getWards -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
