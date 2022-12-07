import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent {

  // roomNumber$ = this.router.params.pipe(map(params => params['roomNumber']));
  roomNumber$ = this.router.paramMap.pipe(map(params=>params.get("roomNumber")));
  constructor(private router: ActivatedRoute) {

  }


}
