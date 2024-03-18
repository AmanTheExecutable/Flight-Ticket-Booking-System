import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { Flight } from '../modals/flight.modal';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flightSchedules: Flight[] = [];
   
  fetchFlightSchedules(): Observable<any> {
    return this.http.get('http://192.168.103.147:8080/flightReports');
  }

  constructor(private http: HttpClient) { }  
  private filteredFlightsSubject = new BehaviorSubject<Flight[]>([]);
  filteredFlights$ = this.filteredFlightsSubject.asObservable();


  setFilteredFlights(flights: Flight[]): void {
    this.filteredFlightsSubject.next(flights);
  }

  getFilteredFlights(): Flight[] {
    return this.filteredFlightsSubject.getValue();
  }


  addFlightSchedule(flight: Flight): void {
    this.flightSchedules.push(flight);
    console.log('Flight added successfully', this.flightSchedules[0]);
  }


  searchFlights(source: string, destination: string, date: string): Observable<Flight[]> {
    
    const filteredFlights = this.flightSchedules.filter(flight =>
      flight.source.toLowerCase() === source.toLowerCase() &&
      flight.destination.toLowerCase() === destination.toLowerCase() &&
      flight.departureDate >= date
    );
    return of(filteredFlights);
  }
  
  

  getFlightById(ide: number): Observable<Flight> {
    const flight = this.flightSchedules.find(flight => flight.id == ide);
    return of(flight);
  }

  updateFlightDetails(updatedFlight: Flight): Observable<string> {
    const index = this.flightSchedules.findIndex(flight => flight.id == updatedFlight.id);
    if (index != -1) {
      this.flightSchedules[index] = updatedFlight;
      console.log('Flight updated:', this.flightSchedules[index])
      return of('Flight details updated successfully');
    } else {
      return of('Flight not found');
    }
  }

  getAllFlightSchedules(): Observable<Flight[]> {
    return of(this.flightSchedules);
  }

  getAllFlightIds(): Observable<number[]> {
    const flightIds = this.flightSchedules.map(flight => flight.id);
    return of(flightIds);
  }
  


  loadFlightSchedules(): void {
    this.fetchFlightSchedules().subscribe((response: any[]) => {
      response.forEach(schedule => {
        const flight: Flight = {
          id: schedule.scheduleId,
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
          business_class_seats: schedule.bc_Seats
        };
        this.flightSchedules.push(flight);
      });
      console.log(this.flightSchedules);
      this.setFilteredFlights(this.flightSchedules);
    });
  }
  


  
}
