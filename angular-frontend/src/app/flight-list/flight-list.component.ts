import { Component, Input } from '@angular/core';
import { Flight } from '../modals/flight.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent {
  @Input() show: boolean;
  @Input() flights: Flight[];
  @Input() source: string;
  @Input() destination: string;

  constructor(private router: Router) { }

  bookFlight(flight: Flight): void {
    console.log(flight);
    this.router.navigate(['booking'], { state: { flight } });
  }
  

}
