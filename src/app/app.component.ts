import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { Component, AfterViewInit, ViewChild, ViewContainerRef, ViewChildren, ElementRef, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'hotelinventoryapp';

  role = "Admin";

  @ViewChild('rooms', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService:LoggerService){}

  ngOnInit(): void {
    this.loggerService?.log("LoggerService log() called");
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;
  }



}
