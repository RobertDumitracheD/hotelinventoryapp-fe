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


function initFactory(initService: InitService) {
  return ()=> initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
