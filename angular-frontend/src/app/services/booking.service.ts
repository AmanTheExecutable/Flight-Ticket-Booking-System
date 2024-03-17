import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  pastBookings = [
    { travelID: 1, company:'Air India', departureDate: '2024-01-15', source: 'Delhi', destination: 'Mumbai', price: 5000},
  ];

  futureBookings = [
    { travelID: 2, company: 'IndiGo', departureDate: '2024-02-20', source: 'Mumbai', destination: 'Delhi', price: 4500 },
  ];
 confirmedBookings = [
  { travelID: 3, company: 'SpiceJet', departureDate: '2024-03-10', source: 'Chennai', destination: 'Bangalore', price: 3500 },
  ];

  constructor() { }
  getPastBookings(userId: string): Observable<any[]> {
    return of(this.pastBookings);
  }

  getFutureBookings(userId: string): Observable<any[]> {
   
    return of(this.futureBookings);
  }

  getConfirmedBookings(): Observable<any[]> {
    
    return of(this.confirmedBookings);
  }

  cancelBooking(bookingId: number){
    window.confirm('Are you sure you want to cancel this booking?');
    const index = this.confirmedBookings.findIndex(booking => booking.travelID);
    this.confirmedBookings.splice(index, 1);
  }

  bookFlight(flight: any): Observable<any> {
    const obj= flight;
    this.confirmedBookings.push({
      travelID: this.confirmedBookings.length + 1,
      company: obj.company,
      departureDate: obj.departureDate,
      source: obj.source,
      destination: obj.destination,
      price: obj.price,
  });
    return of({ message: 'Booking confirmed', flight });
    
  }

}
