import { Injectable } from '@angular/core';
import { Flight } from '../modals/flight.modal';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {
  totalAmount: number = 0;
  passengersData: any[] = [];
  flight: Flight | null = null;

  constructor() { }

  setPassengersData(passengersData: any[]): void {
    this.passengersData = passengersData;
  }

  setFlight(flight: Flight): void {
    this.flight = flight;
  }
}
