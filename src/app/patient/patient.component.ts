import { Component, OnInit } from '@angular/core';
import {PatientService} from "./patient.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Patient} from "./patient";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public patients: Patient[] | null = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(
      (response: HttpResponse<Patient[]>) => {
        this.patients = response.body;
        console.log('getPatients -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
