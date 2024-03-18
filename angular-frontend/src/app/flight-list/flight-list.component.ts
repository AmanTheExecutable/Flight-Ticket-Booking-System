import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../modals/flight.modal';
import { FlightService } from '../services/flight.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit {
  flights: Flight[];
  source: string;
  destination: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.flights = this.flightService.getFilteredFlights();
    this.source = this.route.snapshot.queryParamMap.get('source');
    this.destination = this.route.snapshot.queryParamMap.get('destination');
  }

  bookFlight(flight: Flight): void {
    if (!this.authService.isAuthenticated()) {
      alert('Please login first!');
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: this.router.url },
      });
    } else {
      this.router.navigate(['booking'], { state: { flight } });
    }
  }

  calculateDuration(flight: Flight): string {
    const departureDateTime = new Date(
      `${flight.departureDate}T${flight.departureTime}:00`
    );
    const arrivalDateTime = new Date(
      `${flight.arrivalDate}T${flight.arrivalTime}:00`
    );

    const duration = arrivalDateTime.getTime() - departureDateTime.getTime();
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  }
}
