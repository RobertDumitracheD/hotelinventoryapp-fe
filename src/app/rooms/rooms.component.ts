import { AppConfig } from './../AppConfig/appconfig.interface';
import { RoomsService } from './services/rooms.service';
import { HeaderComponent } from './../header/header.component';
import { AfterViewInit, Component, Inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { API_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { catchError, map, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  selectedRoom!: RoomsList;

  isSelected: boolean = false;

  hotelName = "Hilton Hotel";

  title = "Room List";

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10
  };

  error$ = new Subject<string>();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((error)=>{
      this.error$.next(error.message)
      return of([])
    })
  );

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms)=> rooms.length)
  )

  roomsList: RoomsList[] = [];

  @ViewChild(HeaderComponent) header!: HeaderComponent;

  constructor(private roomsService: RoomsService, @Inject(API_SERVICE_CONFIG) private config: AppConfig) {
    console.log(config.apiEndPoint);
  }
  ngAfterViewInit(): void {
    this.header.title = "Hotel app";
  }

  ngOnInit(): void {

    // this.roomsService.getRooms().subscribe(rooms =>
    //   this.roomsList = rooms
    // );
  }

  toogle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms";
    // if(!this.isSelected){
    //   this.title="Rooms";
    //   this.isSelected=true;
    // } else {
    //   this.title="Rooms List";
    //   this.isSelected=false;
    // }

  }

  selectRoom(room: RoomsList) {
    this.selectedRoom = room;
  }

  updateRoom(newRoom:RoomsList, roomNumber:number) {
    this.roomsService.updateRoom(newRoom, roomNumber).subscribe(rooms => {
      this.roomsList = rooms;
    });
  }

  deleteRoom() {
    let roomNumber = (<HTMLInputElement>document.getElementById("getRoomNumber")).value;

    this.roomsService.deleteRoom(Number(roomNumber)).subscribe(rooms => {
      this.roomsList = rooms;
    });
  }

}
