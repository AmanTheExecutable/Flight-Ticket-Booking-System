import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Flight } from '../modals/flight.modal';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flightSchedules: Flight[] = [{
    id: 1,
    company: 'Indigo',
    source: 'Delhi',
    destination: 'Mumbai',
    departureDate: '2021-08-01',
    departureTime: '10:00',
    arrivalDate: '2021-08-01',
    arrivalTime: '12:00',
    economy_class_price: 3000,
    first_class_price: 6000,
    business_class_price: 8000,
    economy_class_seats: 50,
    business_class_seats: 30,
    first_class_seats: 20
  },
{
  id: 2,
  company: 'Indigo',
  source: 'Delhi',
  destination: 'Mumbai',
  departureDate: '2021-08-01',
  departureTime: '10:00',
  arrivalDate: '2021-08-01',
  arrivalTime: '12:00',
  economy_class_price: 3000,
  first_class_price: 6000,
  business_class_price: 8000,
  economy_class_seats: 50,
  business_class_seats: 30,
  first_class_seats: 20
},
{
  id: 3,
  company: 'Indigo',
  source: 'Delhi',
  destination: 'Mumbai',
  departureDate: '2021-08-01',
  departureTime: '10:00',
  arrivalDate: '2021-08-01',
  arrivalTime: '12:00',
  economy_class_price: 3000,
  first_class_price: 6000,
  business_class_price: 8000,
  economy_class_seats: 50,
  business_class_seats: 30,
  first_class_seats: 20
},
{
  id: 4,
  company: 'Indigo',
  source: 'Delhi',
  destination: 'Mumbai',
  departureDate: '2021-08-01',
  departureTime: '10:00',
  arrivalDate: '2021-08-01',
  arrivalTime: '12:00',
  economy_class_price: 3000,
  first_class_price: 6000,
  business_class_price: 8000,
  economy_class_seats: 50,
  business_class_seats: 30,
  first_class_seats: 20
}];

  constructor() { }


  private filteredFlightsSubject = new BehaviorSubject<Flight[]>([]);
  filteredFlights$ = this.filteredFlightsSubject.asObservable();


  setFilteredFlights(flights: Flight[]): void {
    this.filteredFlightsSubject.next(flights);
  }

  getFilteredFlights(): Flight[] {
    return this.filteredFlightsSubject.getValue();
  }


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

  getFlightById(ide: number): Observable<Flight> {
    const flight = this.flightSchedules.find(flight => flight.id == ide);
    return of(flight);
  }

  updateFlightDetails(updatedFlight: Flight): Observable<string> {
    const index = this.flightSchedules.findIndex(flight => flight.id == updatedFlight.id);
    if (index != -1) {
      this.flightSchedules[index] = updatedFlight;
      console.log('Flight updated:', this.flightSchedules[index])
      return of('Flight details updated successfully');
    } else {
      return of('Flight not found');
    }
  }

  getAllFlightSchedules(): Observable<Flight[]> {
    return of(this.flightSchedules);
  }

  getAllFlightIds(): Observable<number[]> {
    const flightIds = this.flightSchedules.map(flight => flight.id);
    return of(flightIds);
  }
  
  
}
