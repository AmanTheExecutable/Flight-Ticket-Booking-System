import { Component, OnInit } from '@angular/core';
import { Flight } from '../../modals/flight.modal';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-view-flight-schedules',
  templateUrl: './view-flight-schedules.component.html',
  styleUrls: ['./view-flight-schedules.component.scss']
})
export class ViewFlightSchedulesComponent implements OnInit {
  flightSchedules: Flight[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getAllFlightSchedules().subscribe(schedules => {
      this.flightSchedules = schedules;
    });
  }
}
