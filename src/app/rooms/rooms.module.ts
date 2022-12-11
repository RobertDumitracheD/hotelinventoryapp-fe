import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import {RoomsComponent} from "./rooms.component";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {AddRoomComponent} from "./add-room/add-room.component";
import {FormsModule} from "@angular/forms";
import {HeaderModule} from "../header/header.module";
import {RouteConfigtoken} from "../config/routeconfig.service";
import {AuthService} from "../login/auth.service";


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    AddRoomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule
  ],
  exports: [
    AddRoomComponent
  ],
  providers: [
    {
      provide: RouteConfigtoken,
      useValue: {title: "Rooms"}
    },
    // {
    //   provide: AuthService
    // }
  ]
})
export class RoomsModule { }
