import { Injectable } from '@angular/core';

export interface Booking {
  flightId: number;
  passengerName: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookings: Booking[] = [];

  saveBooking(booking: Booking): void {
    this.bookings.push(booking);
  }

  getBookings(): Booking[] {
    return this.bookings;
  }
}
