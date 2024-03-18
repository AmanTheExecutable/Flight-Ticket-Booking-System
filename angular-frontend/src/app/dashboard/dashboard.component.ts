import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Flight } from '../modals/flight.modal';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router, private flightService: FlightService) {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.flightService.loadFlightSchedules();
  }


  navigateTo(route: string): void {
    if(!this.authService.isAuthenticated()) {
      alert('You need to login first');
  }
  else{
    this.router.navigate([route]);
  }
}
}
