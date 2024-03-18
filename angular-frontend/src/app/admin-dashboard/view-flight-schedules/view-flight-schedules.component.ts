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

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.flightService.getAllFlightSchedules().subscribe((schedules) => {
      this.flightSchedules = schedules;
    });
  }

  deleteSchedule(scheduleID: number): void {
    this.flightService
      .deleteFlightSchedule(scheduleID)
      .subscribe((response) => {
        console.log(response);
      });
    alert('Flight Schedule Deleted Successfully');
    this.router.navigate(['/admin-dashboard']);
  }
}
