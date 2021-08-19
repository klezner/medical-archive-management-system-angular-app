import { Component, OnInit } from '@angular/core';
import {PatientService} from "./patient.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Patient} from "./patient";
import {FormGroup, FormControl} from "@angular/forms";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Patient[] | null = [];

  patientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    pesel: new FormControl(''),
    street: new FormControl(''),
    number: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl('')
  })

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
