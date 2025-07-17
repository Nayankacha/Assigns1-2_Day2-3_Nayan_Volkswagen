import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent {
  @Input() flightNumber!: string;
  @Input() destination!: string;
  @Input() departureTime!: string;

  @Output() bookFlight = new EventEmitter<string>();

  onBook() {
    this.bookFlight.emit(this.flightNumber);
  }
}
