import {Component, OnInit} from '@angular/core';
import {StaffResponse} from "../../shared/models/staff-response";
import {StaffService} from "../../shared/services/staff.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff: StaffResponse[] | null = [];

  constructor(private staffService: StaffService) {
  }

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff(): void {
    this.staffService.getStaff().subscribe(
      (response: HttpResponse<StaffResponse[]>) => {
        this.staff = response.body;
        console.log('getStaff -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };
}
