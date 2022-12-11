import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent {
  message: string;
  username!:string;
  password!:string;
  isLoggedIn:boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.message = this.getMessage();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login(this.username,this.password).subscribe((data) => {
      this.message = this.getMessage();
      if (data) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        this.isLoggedIn = true;
        const redirectUrl = '/home';
        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });

    return this.isLoggedIn;
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
