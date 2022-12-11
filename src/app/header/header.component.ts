import { Component } from '@angular/core';
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title="";

  constructor(private configService:ConfigService) {
  }
}
