import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Flight } from '../modals/flight.modal';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent {
  source: string;
  destination: string;
  departureDate: string;
  roundTrip: boolean;
  returnDate: string;
  userform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private flightService: FlightService,
    private router: Router
  ) {
    this.userform = this.formBuilder.group({
      source: [''],
      destination: [''],
      departureDate: [''],
      roundTrip: [''],
      returnDate: [''],
    });
  }

  searchFlights(
    source: string,
    destination: string,
    departureDate: string,
    returnDate: string
  ): void {
    if (!source || !destination || !departureDate) {
      alert('Please fill required fields');
      return;
    }
    const obj = {
      source: capitalizeFirstLetter(source),
      destination: capitalizeFirstLetter(destination),
      departureDate: departureDate,
      returningDate: returnDate ? returnDate : '',
      flightNumber: '',
    };

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    console.log(obj);
    this.flightService
      .searchFlightsByPost(obj)
      .subscribe((flights: Flight[]) => {
        if (flights.length == 0) {
          alert('No flights found for the given source and destination');
          this.userform.reset();
        } else {
          this.navigateToFlightList(source, destination);
        }
      });
  }

  navigateToFlightList(source: string, destination: string): void {
    this.router.navigate(['/flight-search-list'], {
      queryParams: {
        source,
        destination,
      },
    });
  }
}
