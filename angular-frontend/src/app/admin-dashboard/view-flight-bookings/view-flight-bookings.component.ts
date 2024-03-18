import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-view-flight-bookings',
  templateUrl: './view-flight-bookings.component.html',
  styleUrls: ['./view-flight-bookings.component.scss']
})
export class ViewFlightBookingsComponent implements OnInit {
  pastBookings: any[] = [];
  futureBookings: any[] = [];
  confirmedBookings: any[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getPastBookings('userId').subscribe(bookings => {
      this.pastBookings = bookings;
    });

    this.bookingService.getFutureBookings('userId').subscribe(bookings => {
      this.futureBookings = bookings;
    });

    this.bookingService.getConfirmedBookings().subscribe(bookings => {
      this.confirmedBookings = bookings;
    });
  }
}
