import { Component, OnInit } from '@angular/core';
import { FlightService, Flight } from '../flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html'
})
export class FlightListComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.flights = this.flightService.getFlights();
  }
}
