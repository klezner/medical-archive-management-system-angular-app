import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../shared/services/patient.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Patient} from "../../shared/models/patient";
import {FormControl, FormGroup} from "@angular/forms";
import {LocationService} from "../../shared/services/location.service";
import {Location} from "../../shared/models/location";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  location: Location = new Location();

  locationForm = new FormGroup({
    floor: new FormControl(),
    roomNumber: new FormControl()
  })

  patient: Patient = new Patient();

  patientForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    pesel: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    city: new FormControl(),
    zipCode: new FormControl()
  });

  constructor(private patientService: PatientService, private locationService: LocationService) {
  }

  ngOnInit(): void {
  }

  postLocation(): void {
    this.location.floor = this.locationForm.value.floor;
    this.location.roomNumber = this.locationForm.value.roomNumber;

    this.locationService.postLocation(this.location).subscribe(
      (response: HttpResponse<Location>) => {
        console.log(response.body);
        alert('postLocations -> HttpStatus: ' + response.status + ' -> ' + response.body)
        this.closeForm(this.locationForm);
        document.getElementById('closeModal')?.click();
        console.log(document.referrer);
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

    this.patientService.postPatient(this.patient).subscribe(
      (response: HttpResponse<Patient>) => {
        console.log(response.body);
        alert('postPatients -> HttpStatus: ' + response.status + ' -> ' + response.body)
        this.closeForm(this.patientForm);
        document.getElementById('closeModal')?.click();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  closeForm(selectedForm: FormGroup): void {
    selectedForm.reset();
    document.getElementById('closeModal')?.click();
  }

  clearForm(selectedForm: FormGroup): void {
    selectedForm.reset();
  }
}
