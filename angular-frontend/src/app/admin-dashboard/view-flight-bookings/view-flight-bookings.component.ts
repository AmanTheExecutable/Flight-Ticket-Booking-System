import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-view-flight-bookings',
  templateUrl: './view-flight-bookings.component.html',
  styleUrls: ['./view-flight-bookings.component.scss'],
})
export class ViewFlightBookingsComponent implements OnInit {
  allBookings: any[];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getAllBookings().subscribe((bookings) => {
      this.allBookings = bookings.map((booking) => ({
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
      }));
    });
  }
}
