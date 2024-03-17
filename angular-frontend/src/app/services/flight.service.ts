import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Flight } from '../modals/flight.modal';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flightSchedules: Flight[] = [
    {
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
      economy_class_price: 3200,
      first_class_price: 6200,
      business_class_price: 8200,
      economy_class_seats: 45,
      business_class_seats: 25,
      first_class_seats: 15
    },
    {
      id: 3,
      company: 'Air India',
      source: 'Delhi',
      destination: 'Mumbai',
      departureDate: '2021-08-02',
      departureTime: '08:00',
      arrivalDate: '2021-08-02',
      arrivalTime: '10:00',
      economy_class_price: 3400,
      first_class_price: 6400,
      business_class_price: 8400,
      economy_class_seats: 55,
      business_class_seats: 35,
      first_class_seats: 25
    },
    {
      id: 4,
      company: 'SpiceJet',
      source: 'Delhi',
      destination: 'Mumbai',
      departureDate: '2021-08-03',
      departureTime: '11:30',
      arrivalDate: '2021-08-03',
      arrivalTime: '13:30',
      economy_class_price: 3100,
      first_class_price: 6100,
      business_class_price: 8100,
      economy_class_seats: 60,
      business_class_seats: 40,
      first_class_seats: 30
    },
    {
      id: 5,
      company: 'Vistara',
      source: 'Mumbai',
      destination: 'Delhi',
      departureDate: '2021-08-04',
      departureTime: '14:00',
      arrivalDate: '2021-08-04',
      arrivalTime: '16:00',
      economy_class_price: 3300,
      first_class_price: 6300,
      business_class_price: 8300,
      economy_class_seats: 65,
      business_class_seats: 45,
      first_class_seats: 35
    },
    {
      id: 6,
      company: 'GoAir',
      source: 'Chennai',
      destination: 'Kolkata',
      departureDate: '2021-08-05',
      departureTime: '09:30',
      arrivalDate: '2021-08-05',
      arrivalTime: '11:30',
      economy_class_price: 2900,
      first_class_price: 5900,
      business_class_price: 7900,
      economy_class_seats: 50,
      business_class_seats: 30,
      first_class_seats: 20
    },
    {
      id: 7,
      company: 'Air Asia',
      source: 'Bangalore',
      destination: 'Hyderabad',
      departureDate: '2021-08-06',
      departureTime: '12:00',
      arrivalDate: '2021-08-06',
      arrivalTime: '13:00',
      economy_class_price: 3000,
      first_class_price: 6000,
      business_class_price: 8000,
      economy_class_seats: 55,
      business_class_seats: 35,
      first_class_seats: 25
    },
    {
      id: 8,
      company: 'Jet Airways',
      source: 'Kolkata',
      destination: 'Mumbai',
      departureDate: '2021-08-07',
      departureTime: '15:00',
      arrivalDate: '2021-08-07',
      arrivalTime: '17:00',
      economy_class_price: 3200,
      first_class_price: 6200,
      business_class_price: 8200,
      economy_class_seats: 60,
      business_class_seats: 40,
      first_class_seats: 30
    },
    {
      id: 9,
      company: 'Air India',
      source: 'Mumbai',
      destination: 'Delhi',
      departureDate: '2021-08-08',
      departureTime: '18:00',
      arrivalDate: '2021-08-08',
      arrivalTime: '20:00',
      economy_class_price: 3300,
      first_class_price: 6300,
      business_class_price: 8300,
      economy_class_seats: 65,
      business_class_seats: 45,
      first_class_seats: 35
    },
    {
      id: 10,
      company: 'Indigo',
      source: 'Delhi',
      destination: 'Mumbai',
      departureDate: '2021-08-09',
      departureTime: '21:00',
      arrivalDate: '2021-08-09',
      arrivalTime: '23:00',
      economy_class_price: 3100,
      first_class_price: 6100,
      business_class_price: 8100,
      economy_class_seats: 50,
      business_class_seats: 30,
      first_class_seats: 20
    }
  ];
  

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


  searchFlights(source: string, destination: string, date: string): Observable<Flight[]> {
    
    const filteredFlights = this.flightSchedules.filter(flight =>
      flight.source.toLowerCase() === source.toLowerCase() &&
      flight.destination.toLowerCase() === destination.toLowerCase() &&
      flight.departureDate >= date
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
