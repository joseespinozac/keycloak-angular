import { Component, OnInit } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private oauthService:OAuthService) {
    this.configure();
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8180/auth/realms/heroes',
    redirectUri: window.location.origin + "/greetings",
    clientId: 'frontend-demo',
    scope: 'openid profile email offline_access demo',
    responseType: 'jwt',
    showDebugInformation: true
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new  NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

}
