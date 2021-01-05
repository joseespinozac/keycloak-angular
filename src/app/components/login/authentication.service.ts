import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _user: String;
  private _token: String;

  constructor() { }

  public get token(): String {
    if(this._token != null) {
      return this._token
    } else if(this._token == null && localStorage.getItem('token') != null) {
      this._token = localStorage.getItem('token');
      return this._token;
    }
  }
}
