import { Component } from '@angular/core';
import { Person } from './class/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public persons: Array<Person>;
  public name: string;
  public surname: string;
  constructor() {
    this.title = 'Angular Persons List Practice';
    this.persons = [new Person({ name: 'Juan', surname: 'Vazquez Lopez' }), new Person({ name: 'Laura', surname: 'Perez' })];
    console.log(this.persons);
  }

  onAddPerson(): void {
    if (this.name.trim() === '') { return; }
    if (this.surname.trim() === '') { return; }
    const person: Person = new Person({ name: this.name, surname: this.surname });
    this.persons.push(person);
  }
}
