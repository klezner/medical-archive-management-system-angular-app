import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../shared/services/patient.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Patient} from "../../shared/models/patient";
import {FormControl, FormGroup} from "@angular/forms";
import {LocationService} from "../../shared/services/location.service";
import {Location} from "../../shared/models/location";
import {Router} from "@angular/router";
import {ArchiveCategory} from "../../shared/models/archivecategory";
import {ArchiveCategoryService} from "../../shared/services/archivecategory.service";
import {WardService} from "../../shared/services/ward.service";
import {Ward} from "../../shared/models/ward";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ward: Ward = new Ward();

  wardForm = new FormGroup({
    name: new FormControl(),
    abbreviation: new FormControl()
  });

  archiveCategory: ArchiveCategory = new ArchiveCategory();

  archiveCategoryForm = new FormGroup({
    categoryName: new FormControl(),
    storagePeriodYears: new FormControl()
  });

  location: Location = new Location();

  locationForm = new FormGroup({
    floor: new FormControl(),
    roomNumber: new FormControl()
  });

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

  constructor(private router: Router,
              private patientService: PatientService,
              private locationService: LocationService,
              private archiveCategoryService: ArchiveCategoryService,
              private wardService: WardService
  ) {
  }

  ngOnInit(): void {
  }

  postWard(): void {
    this.ward.name = this.wardForm.value.name;
    this.ward.abbreviation = this.wardForm.value.abbreviation;

    this.wardService.postWard(this.ward).subscribe(
      (response: HttpResponse<Ward>) => {
        console.log(response.body);
        alert('postWard -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.clearForm(this.wardForm);
        document.getElementById('closeAddWardModal')?.click();
        this.router.navigate(['/wards']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  postArchiveCategory(): void {
    this.archiveCategory.categoryName = this.archiveCategoryForm.value.categoryName;
    this.archiveCategory.storagePeriodYears = this.archiveCategoryForm.value.storagePeriodYears;

    this.archiveCategoryService.postArchiveCategory(this.archiveCategory).subscribe(
      (response: HttpResponse<Location>) => {
        console.log(response.body);
        alert('postArchiveCategory -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.clearForm(this.archiveCategoryForm);
        document.getElementById('closeAddArchiveCategoryModal')?.click();
        this.router.navigate(['/archivecategories']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  postLocation(): void {
    this.location.floor = this.locationForm.value.floor;
    this.location.roomNumber = this.locationForm.value.roomNumber;

    this.locationService.postLocation(this.location).subscribe(
      (response: HttpResponse<Location>) => {
        console.log(response.body);
        alert('postLocations -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.clearForm(this.locationForm);
        document.getElementById('closeAddLocationModal')?.click();
        this.router.navigate(['/locations']);
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
        alert('postPatients -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.clearForm(this.patientForm);
        document.getElementById('closeAddPatientModal')?.click();
        this.router.navigate(['/patients']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  clearForm(selectedForm: FormGroup): void {
    selectedForm.reset();
  }

}
