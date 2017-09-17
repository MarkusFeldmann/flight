import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Flight } from "../entities/flight";

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges  {
@Input() item: Flight;
@Input() selected: boolean;
@Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug("ctor, " + this.item);
   }

  ngOnInit(){
    console.debug("ngOnInit was called");
  }

  //if run in chrome check if filters are hidinmg the messages 
  ngOnChanges(changes) {
    console.debug("ngOnChanges : " + this.item);

    if(changes.selected) {
      console.debug("ngOnChanges : Selected");
    }
  }

  select() {
    this.selected = true;
    this.selectedChange.emit(this.selected);
  }

  unselect() {
    this.selected = false;
    this.selectedChange.emit(this.selected);
  }

}
