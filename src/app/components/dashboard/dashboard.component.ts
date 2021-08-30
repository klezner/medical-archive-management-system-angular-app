import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../shared/services/patient.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {PatientResponse} from "../../shared/models/patient-response";
import {FormControl, FormGroup} from "@angular/forms";
import {LocationService} from "../../shared/services/location.service";
import {LocationResponse} from "../../shared/models/location-response";
import {Router} from "@angular/router";
import {ArchivecategoryRequest} from "../../shared/models/archivecategory-request";
import {ArchiveCategoryService} from "../../shared/services/archivecategory.service";
import {WardService} from "../../shared/services/ward.service";
import {WardRequest} from "../../shared/models/ward-request";
import {StaffRequest} from "../../shared/models/staff-request";
import {StaffService} from "../../shared/services/staff.service";
import {StaffResponse} from "../../shared/models/staff-response";
import {LocationRequest} from "../../shared/models/location-request";
import {PatientRequest} from "../../shared/models/patient-request";
import {WardResponse} from "../../shared/models/ward-response";
import {ArchiveCategoryResponse} from "../../shared/models/archivecategory-response";
import {FolderRequest} from "../../shared/models/folder-request";
import {FolderService} from "../../shared/services/folder.service";
import {FolderResponse} from "../../shared/models/folder-response";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  folder: FolderRequest = new FolderRequest();

  folderForm = new FormGroup({
    id: new FormControl(),
    year: new FormControl(),
    ledgerId: new FormControl(),
    numberOfFolders: new FormControl(),
    typeLabel: new FormControl(),
    statusLabel: new FormControl(),
    archiveCategoryId: new FormControl(),
    locationId: new FormControl(),
    hospitalizationId: new FormControl(),
    patientId: new FormControl()
  });

  staff: StaffRequest = new StaffRequest();

  staffForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    role: new FormControl(),
    wardId: new FormControl()
  });

  ward: WardRequest = new WardRequest();

  wardForm = new FormGroup({
    name: new FormControl(),
    abbreviation: new FormControl()
  });

  archiveCategory: ArchivecategoryRequest = new ArchivecategoryRequest();

  archiveCategoryForm = new FormGroup({
    categoryName: new FormControl(),
    storagePeriodYears: new FormControl()
  });

  location: LocationRequest = new LocationRequest();

  locationForm = new FormGroup({
    floor: new FormControl(),
    roomNumber: new FormControl()
  });

  patient: PatientRequest = new PatientRequest();

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
              private wardService: WardService,
              private staffService: StaffService,
              private folderService: FolderService
  ) {
  }

  ngOnInit(): void {
  }

  postFolder(): void {
    this.folder.year = this.folderForm.value.year;
    this.folder.ledgerId = this.folderForm.value.ledgerId;
    this.folder.numberOfFolders = this.folderForm.value.numberOfFolders;
    this.folder.typeLabel = this.folderForm.value.typeLabel;
    this.folder.statusLabel = this.folderForm.value.statusLabel;
    this.folder.archiveCategoryId = this.folderForm.value.archiveCategoryId;
    this.folder.locationId = this.folderForm.value.locationId;
    this.folder.hospitalizationId = this.folderForm.value.hospitalizationId;
    this.folder.patientId = this.folderForm.value.patientId;

    this.folderService.postFolder(this.folder).subscribe(
      (response: HttpResponse<FolderResponse>) => {
        console.log(response.body);
        alert('postFolder -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.clearForm(this.folderForm);
        document.getElementById('closeAddFolderModal')?.click();
        this.router.navigate(['/folders']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  postStaff(): void {
    this.staff.name = this.staffForm.value.name;
    this.staff.surname = this.staffForm.value.surname;
    this.staff.role = this.staffForm.value.role;
    this.staff.wardId = this.staffForm.value.wardId;

    this.staffService.postStaff(this.staff).subscribe(
      (response: HttpResponse<StaffResponse>) => {
        console.log(response.body);
        alert('postStaff -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.clearForm(this.staffForm);
        document.getElementById('closeAddStaffModal')?.click();
        this.router.navigate(['/staff']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  postWard(): void {
    this.ward.name = this.wardForm.value.name;
    this.ward.abbreviation = this.wardForm.value.abbreviation;

    this.wardService.postWard(this.ward).subscribe(
      (response: HttpResponse<WardResponse>) => {
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
      (response: HttpResponse<ArchiveCategoryResponse>) => {
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
      (response: HttpResponse<LocationResponse>) => {
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
      (response: HttpResponse<PatientResponse>) => {
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
