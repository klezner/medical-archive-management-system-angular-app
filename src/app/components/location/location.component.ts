import {Component, OnInit} from '@angular/core';
import {Location} from "../../shared/models/location";
import {LocationService} from "../../shared/services/location.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations: Location[] | null = [];

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.locationService.getLocations().subscribe(
      (response: HttpResponse<Location[]>) => {
        this.locations = response.body;
        console.log('getLocations -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
