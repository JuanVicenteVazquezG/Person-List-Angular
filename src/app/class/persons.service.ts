import { Injectable, EventEmitter } from '@angular/core';
import { Person } from '../class/person.model';
import { LogginService } from './LogginService.service';
@Injectable()
export class PersonsServices {
  public persons: Array<Person>;
  public greet: EventEmitter<number>;

  constructor(private logginService: LogginService) {
    this.persons = [
      new Person({ name: 'Juan', surname: 'Vazquez Lopez' }),
      new Person({ name: 'Laura', surname: 'Perez' })
    ];
    this.greet = new EventEmitter();
  }



  addPerson(person: Person): void {
    this.logginService.sendMessageToConsole(`Added a person ${person.human.name}`);
    this.persons.push(person);
  }

}
