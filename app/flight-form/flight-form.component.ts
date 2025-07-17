import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent {
  flight = {
    flightNumber: '',
    departureCity: '',
    arrivalCity: '',
    departureDate: '',
    availableSeats: null,
    flightClass: ''
  };

  bookings: any[] = []; // Store all submitted bookings

  today: string = new Date().toISOString().split('T')[0];

  onSubmit(form: NgForm) {
    if (form.valid && !this.citiesAreSame(this.flight.departureCity, this.flight.arrivalCity)) {
      // Add the booking
      this.bookings.push({ ...this.flight });

      // Reset form
      form.resetForm();
    }
  }

  citiesAreSame(departure: string, arrival: string): boolean {
    return !!departure && !!arrival && departure === arrival;
  }
}

