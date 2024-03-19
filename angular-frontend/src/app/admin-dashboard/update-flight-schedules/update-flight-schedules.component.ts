import { Component, OnInit } from '@angular/core';
import { Flight } from '../../modals/flight.modal';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-flights',
  templateUrl: './update-flight-schedules.component.html',
  styleUrls: ['./update-flight-schedules.component.scss'],
})
export class UpdateFlightSchedulesComponent implements OnInit {
  flightIds = [];
  selectedFlight: Flight | null = null;

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.flightService.getAllFlightIds().subscribe((ids) => {
      this.flightIds.push(...ids);
    });
  }

  selectFlight(flightId: number): void {
    if (flightId) {
      this.flightService.getFlightById(flightId).subscribe((flight) => {
        this.selectedFlight = flight;
        console.log(this.selectedFlight);
      });
    } else {
      this.selectedFlight = null;
    }
  }

  updateFlight(): void {
    if (this.selectedFlight) {
      this.flightService
        .updateFlightDetails(this.selectedFlight)
        .subscribe((updatedFlight) => {
          alert('Flight details updated successfully');
        });
      this.router.navigate(['/admin-dashboard']);
    }
  }
}
