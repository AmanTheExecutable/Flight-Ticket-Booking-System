import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-cancellation',
  templateUrl: './booking-cancellations.component.html',
  styleUrls: ['./booking-cancellations.component.scss'],
})
export class BookingCancellationsComponent implements OnInit {
  upcomingBookings: any[];

  constructor(
    private bookingService: BookingService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookingService
      .getUpcomingBookings(this.userService.userDetails.id)
      .subscribe(
        (bookings) => {
          this.upcomingBookings = bookings;
        },
        (error) => {
          console.error('Failed to fetch confirmed bookings:', error);
        }
      );
  }

  cancelBooking(bookingId: number) {
    this.bookingService.cancelBooking(bookingId);
    this.router.navigate(['/user-dashboard']);
  }

  refreshConfirmedBookings(): void {
    this.bookingService
      .getUpcomingBookings(this.userService.userDetails.id)
      .subscribe(
        (bookings) => {
          this.upcomingBookings = bookings;
        },
        (error) => {
          console.error('Failed to fetch confirmed bookings:', error);
        }
      );
  }
}
