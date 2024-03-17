import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../modals/flight.modal';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flightSchedules: Flight[] = [];

  constructor() { }

  addFlightSchedule(flight: Flight): void {
    this.flightSchedules.push(flight);
    console.log('Flight added successfully', this.flightSchedules[0]);
  }


  searchFlights(source: string, destination: string): Observable<Flight[]> {
    const filteredFlights = this.flightSchedules.filter(flight =>
      flight.source.toLowerCase() === source.toLowerCase() &&
      flight.destination.toLowerCase() === destination.toLowerCase()
    );
    return of(filteredFlights);
  }
}
