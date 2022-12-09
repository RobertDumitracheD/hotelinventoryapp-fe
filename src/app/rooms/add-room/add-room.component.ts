import { Component } from '@angular/core';
import {RoomsService} from "../services/rooms.service";
import {RoomsList} from "../rooms";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'hinv-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {
  successMessage:string="";
  room:RoomsList = {
    amenities: "",
    rating: 0,
    roomPrice: 0,
    roomType: ""
  };

  constructor(private roomsService:RoomsService) {
  }

  addRoom(roomForm:NgForm){
    this.roomsService.addRoom(this.room).subscribe((data)=>{
      this.successMessage="Room Added!"
      roomForm.reset();
    });
  }

}
