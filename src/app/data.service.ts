import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './persons/person-component/person.model';
import { environment } from '../environments/environment';

@Injectable()
export class DataService {
  public firebaseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.firebaseUrl = environment.firebaseUrl;
  }

  // Save Persons
  savePersons(persons: Person[]): void {
    this.httpClient.put(environment.firebaseUrl, persons).subscribe(
      (response) => console.log(`Result saving data ${response}`),
      (error) => console.log(`Error saving data ${error}. `)
    );
  }
}
