import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { BookingComponent } from './booking/booking.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';

// import { ProductFormComponent } from './product-form/product-form.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';
// import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    BookingComponent,
    FlightFormComponent,
    FlightDetailsComponent,
    ReactiveFormComponent,
    // HomeComponent,
    // AboutComponent,
    // ContactComponent

    // ProductFormComponent,
    // ContactFormComponent,
    // ProductFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule, // Needed for ngModel
     ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
