import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { Flight } from '../modals/flight.modal';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  flightSchedules: Flight[] = [];

  fetchFlightSchedules(): Observable<any> {
    return this.http.get(this.commonService.baseURL + 'flightReports');
  }

  constructor(private http: HttpClient, private commonService: CommonService) {}
  private filteredFlightsSubject = new BehaviorSubject<Flight[]>([]);
  filteredFlights$ = this.filteredFlightsSubject.asObservable();

  setFilteredFlights(flights: Flight[]): void {
    this.filteredFlightsSubject.next(flights);
  }

  getFilteredFlights(): Flight[] {
    return this.filteredFlightsSubject.getValue();
  }

  addFlightSchedule(flight: any): void {
    this.flightSchedules.push(flight);
    this.http
      .post<any>(this.commonService.baseURL + 'addSchedule', flight)
      .subscribe((response) => {
        console.log(response);
      });
  }

  searchFlights(
    source: string,
    destination: string,
    date: string
  ): Observable<Flight[]> {
    const filteredFlights = this.flightSchedules.filter(
      (flight) =>
        flight.source.toLowerCase() === source.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase() &&
        flight.departureDate >= date
    );
    return of(filteredFlights);
  }

  getFlightById(ide: number): Observable<Flight> {
    const flight = this.flightSchedules.find((flight) => flight.id == ide);
    return of(flight);
  }

  updateFlightDetails(updatedFlight: Flight): Observable<string> {
    // convert updatedFlight to the JSON format
    const flightJson = {
      scheduleId: updatedFlight.id,
      flightNumber: updatedFlight.flightNumber,
      flightName: updatedFlight.company,
      source: updatedFlight.source,
      destination: updatedFlight.destination,
      departureTime:
        updatedFlight.departureDate + 'T' + updatedFlight.departureTime,
      arrivalTime: updatedFlight.arrivalDate + 'T' + updatedFlight.arrivalTime,
      ec_Seats: updatedFlight.economy_class_seats,
      fc_Seats: updatedFlight.first_class_seats,
      bc_Seats: updatedFlight.business_class_seats,
      ec_Price: updatedFlight.economy_class_price,
      fc_Price: updatedFlight.first_class_price,
      bc_Price: updatedFlight.business_class_price,
    };
    this.http
      .put<any>(this.commonService.baseURL + 'updateSchedule', flightJson)
      .subscribe((response) => {
        console.log(response);
      });
    return of('Flight updated successfully');
  }

  getAllFlightSchedules(): Observable<Flight[]> {
    return of(this.flightSchedules);
  }

  getAllFlightIds(): Observable<number[]> {
    return of(this.flightSchedules.map((flight) => flight.id));
  }

  refreshFlightSchedules(): void {
    this.loadFlightSchedules();
  }

  loadFlightSchedules(): void {
    this.flightSchedules = [];
    this.fetchFlightSchedules().subscribe((response: any[]) => {
      response.forEach((schedule) => {
        const flight: Flight = {
          id: schedule.scheduleId,
          flightNumber: schedule.flightNumber,
          company: schedule.flightName,
          source: schedule.source,
          destination: schedule.destination,
          departureDate: schedule.departureTime.split('T')[0],
          departureTime: schedule.departureTime.split('T')[1].substring(0, 5),
          arrivalDate: schedule.arrivalTime.split('T')[0],
          arrivalTime: schedule.arrivalTime.split('T')[1].substring(0, 5),
          economy_class_price: schedule.ec_Price,
          first_class_price: schedule.fc_Price,
          business_class_price: schedule.bc_Price,
          economy_class_seats: schedule.ec_Seats,
          first_class_seats: schedule.fc_Seats,
          business_class_seats: schedule.bc_Seats,
        };
        this.flightSchedules.push(flight);
      });
      this.setFilteredFlights(this.flightSchedules);
    });
  }

  deleteFlightSchedule(scheduleId: number): Observable<string> {
    return this.http.delete<any>(
      `${this.commonService.baseURL}deleteSchedule/${scheduleId}`
    );
  }
}
