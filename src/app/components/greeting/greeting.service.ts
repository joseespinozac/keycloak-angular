import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  urlEnglish = "http://localhost:8000/demo/english/greeting/hello"
  urlSpanish = "http://localhost:8000/demo/greeting/hola"

  constructor(private _httpClient: HttpClient, _authService: AuthenticationService) { }


  greetingEnglish(): Observable<any> {
    return this._httpClient.get(this.urlEnglish);
  }

  greetingSpanish(): Observable<any> {
    return this._httpClient.get(this.urlSpanish);
  }
}
