import { LoggerService } from './logger.service';
import { Component, AfterViewInit, ViewChild, ViewContainerRef, ViewChildren, ElementRef, OnInit, Optional } from '@angular/core';
import {ConfigService} from "./config/config.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = "Admin";

  @ViewChild('rooms', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService:LoggerService, private configService:ConfigService, private router:Router){}

  ngOnInit(): void {
    this.router.events.pipe(filter((event)=>event instanceof NavigationStart)).subscribe(event=>{console.log("Navigation started")});
    this.router.events.pipe(filter((event)=>event instanceof NavigationEnd)).subscribe(event=>{console.log("Navigation completed")});
    // this.router.events.pipe(filter((event)=>event instanceof NavigationEnd)).subscribe(event=>{console.log("Navigation completed")});
    this.loggerService?.log("LoggerService log() called");
    this.name.nativeElement.innerText = "Hilton Hotel";

    // this.router.events.pipe(filter((event)=>event instanceof NavigationEnd)).subscribe((event)=>{console.log(event)});
  }



}
