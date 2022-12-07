import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {RoomsBookingComponent} from "./rooms/rooms-booking/rooms-booking.component";
import {AddRoomComponent} from "./rooms/add-room/add-room.component";

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'rooms/:roomNumber', component: RoomsBookingComponent},
  {path:'add-room',component:AddRoomComponent},
  {path: '', redirectTo: '/rooms', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
