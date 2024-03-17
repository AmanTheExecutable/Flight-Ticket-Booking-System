import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../modals/flight.modal';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  flight: Flight;
  seats: number = 1;

  constructor(private route: ActivatedRoute,private bookingService: BookingService) { }

  ngOnInit(): void {
    this.flight = history.state.flight;
  }

  confirmBooking(): void {
    this.bookingService.bookFlight(this.flight).subscribe(
      (response) => {
        console.log(response.message);
      },
      error => {
        console.error('Error booking flight:', error);
      }
    );
    console.log('Booking confirmed:', this.flight);
  }

  cancelBooking(): void {
    console.log('Booking cancelled:', this.flight);
  }


}
