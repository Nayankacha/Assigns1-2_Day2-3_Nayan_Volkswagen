// // src/app/flight.service.ts
// import { Injectable } from '@angular/core';

// export interface Flight {
//   flightNumber: string;
//   origin: string;
//   destination: string;
//   departureTime: string;
//   flightType: 'Indigo' | 'SpiceJet';
//   totalSeats: number;
//   availableSeats: number;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class FlightService {

//   private flights: Flight[] = [
//     {
//       flightNumber: '6E203',
//       origin: 'Delhi',
//       destination: 'Mumbai',
//       departureTime: '2025-07-15T09:30:00',
//       flightType: 'Indigo',
//       totalSeats: 180,
//       availableSeats: 30
//     },
//     {
//       flightNumber: 'SG102',
//       origin: 'Bangalore',
//       destination: 'Kolkata',
//       departureTime: '2025-07-15T12:45:00',
//       flightType: 'SpiceJet',
//       totalSeats: 150,
//       availableSeats: 12
//     },
//     {
//       flightNumber: 'SH104',
//       origin: 'Pune',
//       destination: 'Mumbai',
//       departureTime: '2025-07-17T12:45:00',
//       flightType: 'SpiceJet',
//       totalSeats: 100,
//       availableSeats: 54
//     },
//     {
//       flightNumber: 'GF187',
//       origin: 'Pune',
//       destination: 'Kolkata',
//       departureTime: '2025-07-18T12:45:00',
//       flightType: 'Indigo',
//       totalSeats: 160,
//       availableSeats: 32
//     }
//   ];
// }


import { Injectable } from '@angular/core';

export interface Flight {
  id: number;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  flightType: 'Indigo' | 'SpiceJet';
  totalSeats: number;
  availableSeats: number;
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flights: Flight[] = [
    {
      id: 1,
      flightNumber: '6E203',
      origin: 'Delhi',
      destination: 'Mumbai',
      departureTime: '2025-07-15T09:30:00',
      flightType: 'Indigo',
      totalSeats: 180,
      availableSeats: 30
    },
    {
      id: 2,
      flightNumber: 'SG102',
      origin: 'Bangalore',
      destination: 'Kolkata',
      departureTime: '2025-07-15T12:45:00',
      flightType: 'SpiceJet',
      totalSeats: 150,
      availableSeats: 12
    },
    {
      id : 3,
      flightNumber: 'SG102',
      origin: 'Bangalore',
      destination: 'Kolkata',
      departureTime: '2025-07-15T12:45:00',
      flightType: 'SpiceJet',
      totalSeats: 150,
      availableSeats: 12
    },
    {
      id : 4,
      flightNumber: 'SH104',
      origin: 'Pune',
      destination: 'Mumbai',
      departureTime: '2025-07-17T12:45:00',
      flightType: 'SpiceJet',
      totalSeats: 100,
      availableSeats: 54
    },
    {
      id : 5,
      flightNumber: 'GF187',
      origin: 'Pune',
      destination: 'Kolkata',
      departureTime: '2025-07-18T12:45:00',
      flightType: 'Indigo',
      totalSeats: 160,
      availableSeats: 32
    }
  ];

  getFlights() {
    return this.flights;
  }

  getFlightById(id: number) {
    return this.flights.find(f => f.id === id);
  }
}
