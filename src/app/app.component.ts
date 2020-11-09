import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from '../environments/environment';
import firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title: string;

  constructor(private loginService: LoginService) {
    this.title = 'Angular Persons List Practice';
  }

  ngOnInit(): void {
    firebase.initializeApp(firebaseConfig);
  }

  isAutenticated(): boolean {
    return this.loginService.isAutenticated();
  }

  logout(): void {
    this.loginService.logout();
  }
}
