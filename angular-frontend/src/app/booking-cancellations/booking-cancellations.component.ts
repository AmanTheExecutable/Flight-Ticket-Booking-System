import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-cancellation',
  templateUrl: './booking-cancellations.component.html',
  styleUrls: ['./booking-cancellations.component.scss']
})
export class BookingCancellationsComponent implements OnInit {
  confirmedBookings: any[];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getConfirmedBookings().subscribe(
      bookings => {
        this.confirmedBookings = bookings;
      },
      error => {
        console.error('Failed to fetch confirmed bookings:', error);
      }
    );
  }

  cancelBooking(bookingId: number){
    this.bookingService.cancelBooking(bookingId)
    this.refreshConfirmedBookings();
  }

  refreshConfirmedBookings(): void {
    // Refresh the list of confirmed bookings after cancellation
    this.bookingService.getConfirmedBookings().subscribe(
      bookings => {
        this.confirmedBookings = bookings;
      },
      error => {
        console.error('Failed to fetch confirmed bookings:', error);
      }
    );
  }
}
