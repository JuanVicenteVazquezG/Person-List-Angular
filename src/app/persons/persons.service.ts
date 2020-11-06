import { Injectable, EventEmitter } from '@angular/core';
import { Person } from '../persons/person-component/person.model';
import { LogginService } from '../class/LogginService.service';
import { DataService } from '../data.service';

@Injectable()
export class PersonsServices {
  [x: string]: any;
  public persons: Array<Person>;
  public greet: EventEmitter<number>;

  constructor(private logginService: LogginService,
              private dataService: DataService) {
    this.persons = [
      new Person({ name: 'Juan', surname: 'Vazquez Lopez' }),
      new Person({ name: 'Laura', surname: 'Perez' })
    ];
    this.greet = new EventEmitter();
  }



  addPerson(person: Person): void {
    this.logginService.sendMessageToConsole(`Added a person ${person.human.name}`);
    this.persons.push(person);
    this.dataService.savePersons(this.persons);
  }

  findPerson(index: number): Person {
    const person: Person = this.persons[index];
    return person;
  }

  modifyPerson( index: number, person: Person): void{
    this.persons[index] = person;
  }

  deletePerson(index: number): void {
    this.persons.splice(this.index, 1);
  }

}
