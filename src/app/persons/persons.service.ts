import { Injectable, EventEmitter } from '@angular/core';
import { Person } from '../persons/person-component/person.model';
import { LogginService } from '../class/LogginService.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Injectable()
export class PersonsServices {
  public persons: Array<Person>;
  public greet: EventEmitter<number>;
  public index: number;

  constructor(
    private logginService: LogginService,
    private dataService: DataService
  ) {}

  setPersons(persons: Person[]): void {
    this.persons = persons;
  }

  getPersons(): Observable<object> {
    return this.dataService.loadPersons();
  }

  addPerson(person: Person): void {
    this.logginService.sendMessageToConsole(
      `Added a person ${person.human.name}`
    );
    if (this.persons === null) {
      this.persons = [];
    }
    this.persons.push(person);
    this.dataService.savePersons(this.persons);
  }

  findPerson(index: number): Person {
    const person: Person = this.persons[index];
    return person;
  }

  modifyPerson(index: number, person: Person): void {
    this.persons[index] = person;
    this.dataService.modifyPerson(index, person);
  }

  deletePerson(index: number): void {
    this.persons.splice(this.index, 1);
  }
}
