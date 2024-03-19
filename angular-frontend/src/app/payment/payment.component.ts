import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { BookingDataService } from '../services/booking-data.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';

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
  upiId: string = '';
  selectedPaymentOption: string = 'card';

  constructor(
    private router: Router,
    private paymentService: PaymentService,
    private http: HttpClient,
    private commonService: CommonService
  ) {}

  ngOnInit() {}

  getTotalPrice(): number {
    return this.paymentService.getTotalPrice();
  }

  pay(): void {
    if (this.selectedPaymentOption == 'card') {
      if (this.cardNumber && this.cardHolder && this.expiryDate && this.cvv) {
        const obj = {
          paymentData: this.cardNumber,
          amount: this.getTotalPrice(),
        };
        console.log(obj.amount);
        this.http
          .post(this.commonService.baseURL + 'payments', obj)
          .subscribe((res: any) => {
            console.log(res);
            if (res.message == 'Payment Successful') {
              this.paymentService.saveConfirmedBooking();
              this.router.navigate(['payment-confirmation']);
            } else {
              this.router.navigate(['payment-failed']);
            }
          });
      } else {
        alert('Please fill in all card details.');
      }
    } else {
      if (this.upiId) {
        const obj = {
          paymentData: this.upiId,
          amount: this.getTotalPrice(),
        };
        this.http
          .post(this.commonService.baseURL + 'payments', obj)
          .subscribe((res: any) => {
            if (res.message == 'Payment Successful') {
              this.paymentService.saveConfirmedBooking();
              this.router.navigate(['payment-confirmation']);
            } else {
              this.router.navigate(['payment-failed']);
            }
          });
      } else {
        alert('Please fill in UPI ID.');
      }
    }
  }
}
