import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../shared/services/patient.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Patient} from "../../shared/models/patient";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Patient[] | null = [];
  patientForm = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    pesel: new FormControl(null),
    street: new FormControl(null),
    number: new FormControl(null),
    city: new FormControl(null),
    zipCode: new FormControl(null)
  })

  patient: Patient = new Patient();

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

  postPatient(): void {
    this.patient.firstName = this.patientForm.value.firstName;
    this.patient.lastName = this.patientForm.value.lastName;
    this.patient.pesel = this.patientForm.value.pesel;
    this.patient.street = this.patientForm.value.street;
    this.patient.number = this.patientForm.value.number;
    this.patient.city = this.patientForm.value.city;
    this.patient.zipCode = this.patientForm.value.zipCode;

    console.log(this.patient.firstName + " " + this.patient.lastName + " " + this.patient.pesel + " " + this.patient.street + " " + this.patient.number + " " + this.patient.city + " " + this.patient.zipCode);

    this.patientService.postPatient(this.patient).subscribe(
      (response: HttpResponse<Patient>) => {
        console.log(response.body);
        alert('postPatients -> HttpStatus: ' + response.status + ' -> ' + response.body)
        this.clearForm();
        document.getElementById('closeModal')?.click();
        this.getPatients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  closeForm(): void {
    document.getElementById('closeModal')?.click();
    this.patientForm.reset();
  }

  clearForm(): void {
    this.patientForm.reset();
  }
}
