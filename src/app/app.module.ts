import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {RoomsListComponent} from './rooms/rooms-list/rooms-list.component';
import {HeaderComponent} from './header/header.component';
import {ContainerComponent} from './container/container.component';
import {EmployeeComponent} from './employee/employee.component';
import {API_CONFIG, API_SERVICE_CONFIG} from './AppConfig/appconfig.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {InitService} from "./init.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { AddRoomComponent } from './rooms/add-room/add-room.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailValidator/emailvalidator.directive';
import {RoomsModule} from "./rooms/rooms.module";


function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    RoomsModule
  ],
  providers: [
    {
      provide: API_SERVICE_CONFIG,
      useValue: API_CONFIG
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      multi: true,
      deps: [InitService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
