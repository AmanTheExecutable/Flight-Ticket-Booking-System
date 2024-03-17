import { Injectable } from '@angular/core';
import { BookingService } from './booking.service';
import { Flight } from '../modals/flight.modal';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {



  private totalPrice: number;

  constructor(private bookingService: BookingService) { }

  setTotalPrice(price: number): void {
    this.totalPrice = price;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  saveConfirmedBooking(flight: Flight): Observable<any> {
    this.bookingService.getConfirmedBookings().subscribe(
      bookings => {
        console.log(bookings);
      },
      error => {
        console.error('Failed to fetch confirmed bookings:', error);
      }
    );
    return this.bookingService.bookFlight(flight);
    
  }
}
