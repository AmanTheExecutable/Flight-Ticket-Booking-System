import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.flightService.loadFlightSchedules();
  }

  navigateTo(route: string): void {
    if (!this.authService.isAuthenticated()) {
      alert('You need to login first');
    } else {
      this.router.navigate([route]);
    }
  }

  login(): void {
    this.router.navigate(['login']);
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
