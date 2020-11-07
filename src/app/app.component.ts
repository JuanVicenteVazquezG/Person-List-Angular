import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from '../environments/environment';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'Angular Persons List Practice';
  }

  ngOnInit(): void {
    firebase.initializeApp(firebaseConfig);
  }
}
