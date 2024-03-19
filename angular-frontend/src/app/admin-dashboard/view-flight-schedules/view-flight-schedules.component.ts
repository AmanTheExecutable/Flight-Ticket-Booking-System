import { Component, OnInit } from '@angular/core';
import { Flight } from '../../modals/flight.modal';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-flight-schedules',
  templateUrl: './view-flight-schedules.component.html',
  styleUrls: ['./view-flight-schedules.component.scss'],
})
export class ViewFlightSchedulesComponent implements OnInit {
  flightSchedules: Flight[] = [];

  constructor(private flightService: FlightService, private router: Router) {
    this.flightService.getAllFlightSchedules().subscribe((schedules) => {
      this.flightSchedules = schedules;
    });
  }

  ngOnInit(): void {
    this.flightService.getAllFlightSchedules().subscribe((schedules) => {
      this.flightSchedules = schedules;
    });
  }

  deleteSchedule(scheduleID: number): void {
    this.flightService.deleteFlightSchedule(scheduleID).subscribe(() => {
      this.flightSchedules = this.flightSchedules.filter(
        (schedule) => schedule.id !== scheduleID
      );
      this.flightService.loadFlightSchedules().subscribe();
      this.flightService.getAllFlightSchedules().subscribe((schedules) => {
        this.flightSchedules = schedules;
      });
    });
    this.router.navigate(['admin-dashboard']);
    alert('Flight schedule deleted successfully');
  }
}
