import { Component } from '@angular/core';
import { Person } from './class/person.model';
import { LogginService } from './class/LogginService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LogginService]
})
export class AppComponent {
  public title: string;
  public persons: Array<Person>;

  constructor(private LoggedService: LogginService) {
    this.title = 'Angular Persons List Practice';
    this.persons = [new Person({ name: 'Juan', surname: 'Vazquez Lopez' }), new Person({ name: 'Laura', surname: 'Perez' })];
  }

  onPersonAdded(person: Person): void {
    this.persons.push(person);
    this.LoggedService.sendMessageToConsole(` ${person.human.name} was added to the array`);
  }

}
