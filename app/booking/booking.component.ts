import { Component, OnInit } from '@angular/core';
import { BookingService, Booking } from '../booking.service';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  flightId: number | null = null;
  passengerName: string = '';
  confirmationMessage: string = '';
  bookings: Booking[] = [];
  availableFlights = this.flightService.getFlights();

  constructor(
    private bookingService: BookingService,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
  }

  onSubmit(): void {
    if (this.flightId !== null && this.passengerName.trim()) {
      const flight = this.flightService.getFlightById(Number(this.flightId));
      if (flight) {
        this.bookingService.saveBooking({
          flightId: flight.id,
          passengerName: this.passengerName,
        });
        this.confirmationMessage = `Booking confirmed for ${this.passengerName} on Flight ID ${flight.id}`;
        this.passengerName = '';
        this.flightId = null;

        // Refresh list
        this.bookings = this.bookingService.getBookings();
      } else {
        this.confirmationMessage = 'Invalid flight ID.';
      }
    } else {
      this.confirmationMessage = 'Please enter valid data.';
    }
  }
}
