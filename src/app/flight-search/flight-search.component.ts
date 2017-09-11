import { Flight } from '../entities/flight';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

  public from: string;
  public to: string;
  public date: string = (new Date()).toISOString();
  public flights: Array<Flight>[];
  selectedFlight: Flight;

  constructor(private http: Http) { }

  search() {
    let url = "http://www.angular-akademie.com/api/flight";

    let headers = new Headers();
    headers.set('Accept', 'text/json');

    let search = new URLSearchParams();
    search.set('from', this.from);
    search.set('to', this.to);

    this.http
      .get(url, { headers, search })
      .map(resp => { 
        console.log("--> " + resp.text());
        return resp.json() })
      .subscribe(flights => {
        this.flights = flights;
      },
      err => {
        console.log(err);
      }
      );
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }


}
