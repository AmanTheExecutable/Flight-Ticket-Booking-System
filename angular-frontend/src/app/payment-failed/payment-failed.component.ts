import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failed-confirmation',
  templateUrl: './payment-failed.component.html',
  styleUrls: ['./payment-failed.component.scss']
})
export class PaymentFailedComponent implements OnInit {
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
