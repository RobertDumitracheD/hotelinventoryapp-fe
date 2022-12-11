import { Component } from '@angular/core';
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor(private configService:ConfigService) {
  }
}
