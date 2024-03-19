import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from './common.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  pastBookings = [];

  upcomingBookings = [];

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private userService: UserService
  ) {}

  getAllBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.commonService.baseURL + 'bookings');
  }

  getPastBookings(userId: number): Observable<any[]> {
    this.http
      .get(this.commonService.baseURL + 'pastBookings/' + userId)
      .subscribe((response: any[]) => {
        console.log(response);
        response.forEach((booking: any) => {
          this.pastBookings.push({
            travelID: booking.bookingId,
            bookingDate: booking.bookingDate.split('T')[0],
            userName: booking.name,
            company: booking.flightName,
            flightNumber: booking.flightNumber,
            source: booking.source,
            destination: booking.destination,
            departureDate: booking.departureTime.split('T')[0],
            arrivalDate: booking.arrivalTime.split('T')[0],
            passengerName: booking.passengerName,
            passengerGender: booking.passengerGender,
            passengerPhone: booking.passengerPhone,
            passengerAge: booking.passengerAge,
            passengerEmail: booking.passengerEmail,
            price: booking.ticketPrice,
            seatPrefernce: booking.seatPreference,
          });
        });
      });
    return of(this.pastBookings);
  }

  getUpcomingBookings(userID: number): Observable<any[]> {
    this.upcomingBookings = [];
    this.http
      .get(this.commonService.baseURL + 'upcomingBookings/' + userID)
      .subscribe((response: any[]) => {
        console.log(response);
        response.forEach((booking: any) => {
          this.upcomingBookings.push({
            travelID: booking.bookingId,
            bookingDate: booking.bookingDate.split('T')[0],
            userName: booking.name,
            company: booking.flightName,
            flightNumber: booking.flightNumber,
            source: booking.source,
            destination: booking.destination,
            departureDate: booking.departureTime.split('T')[0],
            arrivalDate: booking.arrivalTime.split('T')[0],
            passengerName: booking.passengerName,
            passengerGender: booking.passengerGender,
            passengerPhone: booking.passengerPhone,
            passengerAge: booking.passengerAge,
            passengerEmail: booking.passengerEmail,
            price: booking.ticketPrice,
            seatPrefernce: booking.seatPreference,
          });
        });
      });
    return of(this.upcomingBookings);
  }

  cancelBooking(bookingId: number) {
    window.confirm('Are you sure you want to cancel this booking?');
    this.http
      .delete(this.commonService.baseURL + 'bookings/' + bookingId)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error('Failed to cancel booking:', error);
        }
      );
  }

  // bookFlight(flight: any): Observable<any> {
  //   const obj = flight;
  //   this.upcomingBookings.push({
  //     travelID: this.upcomingBookings.length + 1,
  //     company: obj.company,
  //     departureDate: obj.departureDate,
  //     arrivalDate: obj.arrivalDate,
  //     source: obj.source,
  //     destination: obj.destination,
  //     price: obj.price,
  //   });
  //   return of({ message: 'Booking confirmed', flight });
  // }
}
