import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  greetingEnglish: String = "";
  greetingSpanish: String = "";

  textGreeting: String = "";

  constructor(private _greetingService: GreetingService, private _authService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.getEnglishGreeting();
    this.getSpanishGreeting();
  }

  getSpanishGreeting() {
    this._greetingService.greetingSpanish().subscribe(
      response => {
        this.greetingSpanish = response;
      }
    )
  }

  getEnglishGreeting() {
    this._greetingService.greetingEnglish().subscribe(
      response => {
        this.greetingEnglish = response;
      }
    )
  }

  getEnglishGreetingButton() {
    this._greetingService.greetingEnglish().subscribe(
      response => {
        this.textGreeting = response;
      }
    )
  }

  logout() {

  }

  getSpanishGreetingButton() {
    this._greetingService.greetingSpanish().subscribe(
      response => {
        this.textGreeting = response;
      }
    )
  }

}
