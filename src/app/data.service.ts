import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './persons/person-component/person.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  public firebaseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.firebaseUrl = environment.firebaseUrl;
  }

  loadPersons(): Observable<object> {
    const data = this.httpClient.get(environment.firebaseUrl);
    return data;
  }

  // Save Persons
  savePersons(persons: Person[]): void {
    this.httpClient.put(environment.firebaseUrl, persons).subscribe(
      (response) => console.log(`Result saving data ${response}`),
      (error) => console.log(`Error saving data ${error}. `)
    );
  }

  modifyPerson(index: number, person: Person): void {
    this.httpClient
      .put(`${environment.firebaseUrl.slice(0, -5)}/${index}.json`, person)
      .subscribe(
        (response) => console.log(` data ${response} was modified!`),
        (error) => console.log(`Data was not update because ${error}`)
      );
  }
}
