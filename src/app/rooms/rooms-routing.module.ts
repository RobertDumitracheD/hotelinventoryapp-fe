import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomsComponent} from "./rooms.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {AddRoomComponent} from "./add-room/add-room.component";

const routes: Routes = [
  {path: '', component: RoomsComponent,
    children:[
      {path:'add-room',component:AddRoomComponent},
      {path: ":roomNumber", component: RoomsBookingComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
