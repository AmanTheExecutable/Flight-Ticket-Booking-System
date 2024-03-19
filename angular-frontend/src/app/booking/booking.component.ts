import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../modals/flight.modal';
import { BookingService } from '../services/booking.service';
import { BookingDataService } from '../services/booking-data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  flight: Flight;
  duration: string;
  seats: number = 1;
  bookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookingDataService: BookingDataService
  ) {}

  ngOnInit(): void {
    this.flight = history.state.flight;

    this.initializeForm();

    this.duration = this.calculateDuration();
  }

  initializeForm(): void {
    this.bookingForm = this.fb.group({
      passengers: this.fb.array([]),
    });
    this.addPassenger();
  }

  get passengers(): FormArray {
    return this.bookingForm.get('passengers') as FormArray;
  }

  addPassenger(): void {
    this.passengers.push(
      this.fb.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        seatCategory: ['economy'],
        gender: ['', Validators.required],
      })
    );
  }

  removePassenger(index: number): void {
    if (confirm('Are you sure you want to remove this passenger?')) {
      this.passengers.removeAt(index);
    }
  }

  confirmBooking() {
    const passengersData = this.bookingForm.get('passengers').value;
    if (
      passengersData
        .map((passenger) => Object.values(passenger))
        .flat()
        .includes('')
    ) {
      alert('Please fill all the details');
      return;
    }
    const flight = this.flight;

    this.bookingDataService.setPassengersData(passengersData);
    this.bookingDataService.setFlight(flight);
    this.bookingDataService.totalAmount = this.calculateTotalPrice();

    this.router.navigate(['/confirm-booking']);
  }

  cancelBooking(): void {
    console.log('Booking cancelled:', this.flight);
  }

  calculateDuration(): string {
    const departureDateTime = new Date(
      `${this.flight.departureDate}T${this.flight.departureTime}:00`
    );
    const arrivalDateTime = new Date(
      `${this.flight.arrivalDate}T${this.flight.arrivalTime}:00`
    );

    const duration = arrivalDateTime.getTime() - departureDateTime.getTime();
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  }

  calculateTotalPrice(): number {
    const totalPassengers = this.passengers.length;
    let totalPrice = 0;

    for (const passenger of this.passengers.controls) {
      const seatCategory = passenger.get('seatCategory').value;
      switch (seatCategory) {
        case 'economy':
          totalPrice += this.flight.economy_class_price;
          break;
        case 'business':
          totalPrice += this.flight.business_class_price;
          break;
        case 'firstClass':
          totalPrice += this.flight.first_class_price;
          break;
        default:
          totalPrice += this.flight.economy_class_price;
          break;
      }
    }

    return totalPrice * totalPassengers;
  }
}
