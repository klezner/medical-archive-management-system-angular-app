import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../shared/services/patient.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Patient} from "../../shared/models/patient";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  patient: Patient = new Patient();

  patientForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    pesel: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    city: new FormControl(),
    zipCode: new FormControl()
  })

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
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
