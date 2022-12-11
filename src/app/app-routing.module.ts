import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {RoomsBookingComponent} from "./rooms/rooms-booking/rooms-booking.component";
import {AddRoomComponent} from "./rooms/add-room/add-room.component";
import {LoginComponent} from "./login/login.component";
import {RoomsRoutingModule} from "./rooms/rooms-routing.module";

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path:'login',component:LoginComponent},
  {path:'rooms',
    loadChildren: ()=> import('./rooms/rooms.module').then((m)=> m.RoomsModule),

  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
