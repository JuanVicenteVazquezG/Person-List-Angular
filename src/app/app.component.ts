import { Component } from '@angular/core';
import { Person } from './class/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string;
  public persons: Array<Person>;

  constructor() {
    this.title = 'Angular Persons List Practice';
    this.persons = [new Person({ name: 'Juan', surname: 'Vazquez Lopez' }), new Person({ name: 'Laura', surname: 'Perez' })];
  }

  onPersonAdded(person: Person): void {
    this.persons.push(person);
  }

}
