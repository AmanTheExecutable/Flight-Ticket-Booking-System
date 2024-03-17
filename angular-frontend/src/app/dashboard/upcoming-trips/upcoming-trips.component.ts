// upcoming-trips.component.ts

import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-upcoming-trips',
  templateUrl: './upcoming-trips.component.html',
  styleUrls: ['./upcoming-trips.component.scss']
})
export class UpcomingTripsComponent implements OnInit {
  upcomingTrips: any[] = []; // Define the variable to store upcoming trips data

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loadUpcomingTrips(); // Fetch upcoming trips data when the component initializes
  }

  loadUpcomingTrips(): void {
    // Assuming the service method is provided to fetch upcoming trips data
    this.bookingService.getFutureBookings('').subscribe(trips => {
      this.upcomingTrips = trips;
    });
  }

  // Add other methods or logic as needed
}
