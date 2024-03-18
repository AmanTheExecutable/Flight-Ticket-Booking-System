import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-schedule-management',
  templateUrl: './flight-schedule-management.component.html',
  styleUrls: ['./flight-schedule-management.component.scss']
})
export class FlightScheduleManagementComponent implements OnInit {
  flightForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightForm = this.formBuilder.group({
      id: ['', Validators.required],
      company: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required],
      departureTime: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      economyClassPrice: ['', Validators.required],
      firstClassPrice: ['', Validators.required],
      businessClassPrice: ['', Validators.required],
      economyClassSeats: ['', Validators.required],
      firstClassSeats: ['', Validators.required],
      businessClassSeats: ['', Validators.required]
    });
  }

  calculateDuration(): string {
    const departureDate = this.flightForm.value.departureDate;
    const departureTime = this.flightForm.value.departureTime;
    const arrivalDate = this.flightForm.value.arrivalDate;
    const arrivalTime = this.flightForm.value.arrivalTime;

    const departureDateTime = new Date(departureDate + 'T' + departureTime);
    const arrivalDateTime = new Date(arrivalDate + 'T' + arrivalTime);

    const duration = arrivalDateTime.getTime() - departureDateTime.getTime();
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  }

  submitFlight(): void {
    if (this.flightForm.valid) {
      const flightData = this.flightForm.value;
      const departureDateTime = new Date(flightData.departureDate + 'T' + flightData.departureTime);
      const arrivalDateTime = new Date(flightData.arrivalDate + 'T' + flightData.arrivalTime);
      const obj = {
        flightNumber: flightData.id,
        flightName: flightData.company,
        source: flightData.source,
        destination: flightData.destination,
        departureTime: departureDateTime,
        arrivalTime: arrivalDateTime,
        ec_Seats: flightData.economyClassSeats,
        bc_Seats: flightData.businessClassSeats,
        fc_Seats: flightData.firstClassSeats,
        ec_Price: flightData.economyClassPrice,
        fc_Price: flightData.firstClassPrice,
        bc_Price: flightData.businessClassPrice, 
        
      }
      this.flightService.addFlightSchedule(obj);
      alert('Flight added successfully');
    }
  }
}
