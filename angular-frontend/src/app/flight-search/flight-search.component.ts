import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Flight } from '../modals/flight.modal';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {
  source: string;
  destination: string;
  departureDate: Date;
  numPersons: number;
  userform: FormGroup;
  filteredFlights: Flight[] = [];

  constructor(private formBuilder: FormBuilder, private flightService: FlightService) {
    this.userform = this.formBuilder.group({
      source: [''],
      destination: [''],
      departureDate: [''],
      numPersons: ['']
    });
  }

  searchFlights(source:string, destination:string): void {
    console.log(this.flightService.flightSchedules[0]);
    this.flightService.searchFlights(source,destination).subscribe(
      (flights: Flight[]) => {
        this.filteredFlights = flights;
      },
      error => {
        console.error('Error searching for flights:', error);
      }
    );

    console.log(this.filteredFlights)
  }

 
}
