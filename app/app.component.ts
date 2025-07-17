import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Flight details in parent component
  flight = {
    number: 'CE601',
    destination: 'Dubai',
    departureTime: '2025-07-27T18:30:00'
  };

  bookingMessage: string = '';

  // Handle booking event from child
  onBookFlight(flightNumber: string) {
    this.bookingMessage = `Flight ${flightNumber} has been successfully booked!`;
  }
}
