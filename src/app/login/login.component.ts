import {Component} from '@angular/core';
import {RoomsService} from "../rooms/services/rooms.service";
import {NgForm} from "@angular/forms";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  loggedIn:boolean=false;

  // login$ = this.roomsService.loginAdmin(this.username,this.password).pipe(map=>
  //
  // );

  constructor(private roomsService:RoomsService, private router:Router) {
  }

  login(loginForm:NgForm) {
    this.roomsService.loginAdmin(this.username,this.password).subscribe(data=>{
      if(data){
        this.loggedIn=true;
        this.router.navigate(['/rooms']);
        loginForm.reset();
      }else{
        this.loggedIn=false;
      }
    });
  }

}
