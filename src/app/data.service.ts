import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './persons/person-component/person.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
  public firebaseUrl: string;
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {
    this.firebaseUrl = environment.firebaseUrl;
  }

  loadPersons(): Observable<object> {
    const token = this.loginService.getIdToken();
    console.log('este es el token ',token);
    const data = this.httpClient.get(
      `${environment.firebaseUrl}?auth=${token}`
    );
    return data;
  }

  // Save Persons
  savePersons(persons: Person[]): void {
    const token = this.loginService.getIdToken();
    this.httpClient.put(`${environment.firebaseUrl}?auth=${token}`, persons).subscribe(
      (response) => console.log(`Result saving data ${response}`),
      (error) => console.log(`Error saving data ${error}. `)
    );
  }

  modifyPerson(index: number, person: Person): void {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(`${environment.firebaseUrl.slice(0, -5)}/${index}.json?auth=${token}`, person)
      .subscribe(
        (response) => console.log(` data ${response} was modified!`),
        (error) => console.log(`Data was not update because ${error}`)
      );
  }

  deletePerson(index: number): void {
    const token = this.loginService.getIdToken();
    this.httpClient
      .delete(`${environment.firebaseUrl.slice(0, -5)}/${index}.json?auth=${token}`)
      .subscribe(
        (response) => console.log(` data ${response} was delete!`),
        (error) => console.log(`Data was not delete because ${error}`)
      );
  }
}
