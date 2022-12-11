import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {map, Observable} from "rxjs";
import {environment} from "../environments/environments";

@Injectable()
export class AuthService {
  isLoggedIn: boolean = true;
  // store the URL so we can redirect after logging in
  public redirectUrl: any;
  environment = environment.apiEndPoint;
  constructor (
    private httpClient: HttpClient,
    private router: Router
  ) {}

  login(username?: string, password?: string): Observable<boolean> {
    const body = {
      username,
      password
    };
    return this.httpClient.post<boolean>(this.environment + '/all/login', body);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
