import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HttpModule } from '@angular/http';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { DateComponent } from './shared/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightCardComponent,
    DateComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
