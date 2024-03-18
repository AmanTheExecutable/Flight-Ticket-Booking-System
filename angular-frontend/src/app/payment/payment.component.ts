import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { BookingDataService } from '../services/booking-data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  cardNumber: string = '';
  cardHolder: string = '';
  expiryDate: string = '';
  cvv: string = '';

  constructor(
    private router: Router,
    private paymentService: PaymentService,
    private bookingDataService: BookingDataService
  ) {}

  ngOnInit() {}

  getTotalPrice(): number {
    return this.paymentService.getTotalPrice();
  }

  pay(): void {
    if (this.cardNumber && this.cardHolder && this.expiryDate && this.cvv) {
      const random = Math.random();
      if (random < 0.8) {
        this.paymentService.saveConfirmedBooking();

        this.router.navigate(['payment-confirmation']);
      } else {
        this.router.navigate(['payment-failed']);
      }
    } else {
      alert('Please fill in all card details.');
    }
  }
}
