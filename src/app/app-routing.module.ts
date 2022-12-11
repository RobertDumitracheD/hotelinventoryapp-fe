import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {RoomsBookingComponent} from "./rooms/rooms-booking/rooms-booking.component";
import {AddRoomComponent} from "./rooms/add-room/add-room.component";
import {LoginComponent} from "./login/login.component";
import {RoomsRoutingModule} from "./rooms/rooms-routing.module";
import {LoginGuard} from "./guards/login.guard";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [


  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard]
      },
      {
        path: 'rooms',
        loadChildren: () => import('./rooms/rooms.module').then((m) => m.RoomsModule), canActivate: [LoginGuard]
      },
      {
        path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), canActivate: [LoginGuard]
      },
      {
        path: 'add-room', component:AddRoomComponent, canActivate: [LoginGuard]
      },
    ]
  },
  {path: 'login', component: LoginComponent},

  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
