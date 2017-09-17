import { Component, Input, Output } from '@angular/core';
import { Flight } from "../entities/flight";

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent  {
@Input() item: Flight;
@Input() selected: boolean;

  constructor() { }

  select() {
    this.selected = true;
  }

  unselect() {
    this.selected = false;
  }

}
