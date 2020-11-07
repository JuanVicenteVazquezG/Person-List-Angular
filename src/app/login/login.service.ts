import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class LoginService {
  public token: string;

  constructor(private router: Router) {}

  async login(email: string, password: string): Promise<void> {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      this.token = await response.user.getIdToken();
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }

  getIdToken(): string {
    return this.token;
  }
}
