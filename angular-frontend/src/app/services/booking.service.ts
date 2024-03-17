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
  { travelID: 1, company: 'SpiceJet', departureDate: '2024-03-10',arrivalDate:'2024-04-2024' , source: 'Chennai', destination: 'Bangalore', price: 3500 },
  { travelID: 2, company: 'Vistara', departureDate: '2024-04-05',arrivalDate:'2024-04-2024' , source: 'Kolkata', destination: 'Mumbai', price: 6000 },
  { travelID: 3, company: 'GoAir', departureDate: '2024-05-20',arrivalDate:'2024-04-2024' , source: 'Delhi', destination: 'Chennai', price: 4000 },
  { travelID: 4, company: 'AirAsia', departureDate: '2024-06-15',arrivalDate:'2024-04-2024' , source: 'Mumbai', destination: 'Kolkata', price: 5500 },
  { travelID: 5, company: 'Air India', departureDate: '2024-07-10',arrivalDate:'2024-04-2024' , source: 'Chennai', destination: 'Delhi', price: 3500 },
  { travelID: 6, company: 'IndiGo', departureDate: '2024-08-05',arrivalDate:'2024-04-2024' , source: 'Kolkata', destination: 'Mumbai', price: 6000 },
  { travelID: 8, company: 'Vistara', departureDate: '2024-10-15',arrivalDate:'2024-04-2024' , source: 'Mumbai', destination: 'Kolkata', price: 5500 },
  { travelID: 9, company: 'GoAir', departureDate: '2024-11-10', arrivalDate:'2024-04-2024' ,source: 'Chennai', destination: 'Delhi', price: 3500 },
  { travelID: 10, company: 'AirAsia', departureDate: '2024-12-05', arrivalDate:'2024-04-2024' ,source: 'Kolkata', destination: 'Mumbai', price: 6000 },
  { travelID: 11, company: 'Air India', departureDate: '2025-01-20',arrivalDate:'2024-04-2024' , source: 'Delhi', destination: 'Chennai', price: 4000 },
  { travelID: 12, company: 'IndiGo', departureDate: '2025-02-15',arrivalDate:'2024-04-2024' , source: 'Mumbai', destination: 'Kolkata', price: 5500 },
  { travelID: 13, company: 'SpiceJet', departureDate: '2025-03-10',arrivalDate:'2024-04-2024' , source: 'Chennai', destination: 'Delhi', price: 3500 },
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
    const index = this.confirmedBookings.findIndex(booking => booking.travelID == bookingId);
    this.confirmedBookings.splice(index, 1);
  }

  bookFlight(flight: any): Observable<any> {
    const obj= flight;
    this.confirmedBookings.push({
      travelID: this.confirmedBookings.length + 1,
      company: obj.company,
      departureDate: obj.departureDate,
      arrivalDate: obj.arrivalDate,
      source: obj.source,
      destination: obj.destination,
      price: obj.price,
  });
    return of({ message: 'Booking confirmed', flight });
    
  }

}
