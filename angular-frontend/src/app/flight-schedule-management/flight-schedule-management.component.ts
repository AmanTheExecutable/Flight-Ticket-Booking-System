import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../modals/flight.modal';
import { BookingService } from '../services/booking.service';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-schedule-management',
  templateUrl: './flight-schedule-management.component.html',
  styleUrls: ['./flight-schedule-management.component.scss']
})
export class FlightScheduleManagementComponent implements OnInit {
  flightForm: FormGroup;

  constructor(private fb: FormBuilder, private flightService: FlightService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.flightForm = this.fb.group({
      id: ['', Validators.required],
      company: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required],
      departureTime: ['', Validators.required],
      duration: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      price: ['', Validators.required],
      availableSeats: ['', Validators.required],
    });
  }

  submitFlight(): void {
    if (this.flightForm.valid) {
      const flightData: Flight = this.flightForm.value;
      this.flightService.addFlightSchedule(flightData);
      alert('Flight added successfully');
    }
  }
}
