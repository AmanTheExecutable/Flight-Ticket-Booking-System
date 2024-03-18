import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from './common.service';

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
  ];

  constructor(private http: HttpClient, private commonService: CommonService) { }
  getPastBookings(userId: string): Observable<any[]> {
    return of(this.pastBookings);
  }

  getFutureBookings(userId: string): Observable<any[]> {
   
    return of(this.futureBookings);
  }

  getConfirmedBookings(): Observable<any[]> {
    this.confirmedBookings = [];
    this.http.get(this.commonService.baseURL+'completeBookings').subscribe((response: any[]) => {
      console.log(response);
      response.forEach(
        (booking: any) => {
          this.confirmedBookings.push({
            travelID: booking.bookingId,
            userName: booking.userName,
            company: booking.flightName,
            flightNumber: booking.flightNumber,
            source: booking.source,
            destination: booking.destination,
            departureDate: booking.departure.split('T')[0],
            arrivalDate: booking.arrival.split('T')[0],
            passengerName: booking.passengerName,
            passengerGender: booking.passengerGender,
            passengerPhone: booking.passengerPhone,
            passengerAge: booking.passengerAge,
            price: booking.ticketPrice,
          });
        }
      )
    });
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
