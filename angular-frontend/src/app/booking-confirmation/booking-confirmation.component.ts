import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { BookingDataService } from '../services/booking-data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss']
})
export class ConfirmBookingComponent implements OnInit {
  totalAmount: number = 0;
  passengersData: any;
  flight: any;

  constructor(private authService: AuthService,private router: Router, private paymentService: PaymentService, private bookingDataService: BookingDataService) { }

  ngOnInit() {
    this.passengersData = this.bookingDataService.passengersData;
    this.flight = this.bookingDataService.flight;
    this.totalAmount = this.bookingDataService.totalAmount;
  }

  calculateDuration(): string {
    const departureDateTime = new Date(`${this.flight.departureDate}T${this.flight.departureTime}:00`);
    const arrivalDateTime = new Date(`${this.flight.arrivalDate}T${this.flight.arrivalTime}:00`);
  
    const duration = arrivalDateTime.getTime() - departureDateTime.getTime();
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  
    return `${hours}h ${minutes}m`;
  }

  cancelBooking(): void {
    window.history.back();
  }

  payment(): void {

    const totalPrice = this.bookingDataService.totalAmount;
    this.paymentService.setTotalPrice(totalPrice);
    this.router.navigate(['/payment'])
  }
}


