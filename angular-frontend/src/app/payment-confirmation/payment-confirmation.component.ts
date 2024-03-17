import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent implements OnInit {
  timer: number = 5;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const intervalId = setInterval(() => {
      if (this.timer === 0) {
        clearInterval(intervalId);
        this.redirectToDashboard();
      } else {
        this.timer--;
      }
    }, 1000);
  }

  onContinue(): void {
    this.redirectToDashboard();
  }

  private redirectToDashboard(): void {
    this.router.navigate(['/user-dashboard']);
  }
}
