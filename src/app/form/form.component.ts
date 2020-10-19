import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../class/person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent {
  public name: string;
  public surname: string;
  @Output() createdPerson: EventEmitter<Person>;

  constructor() {
    this.createdPerson = new EventEmitter<Person>();
  }

  onAddPerson(): void {
    if (this.name.trim() === '') { return; }
    if (this.surname.trim() === '') { return; }
    const person: Person = new Person({ name: this.name, surname: this.surname });

    this.createdPerson.emit(person);
    this.name = '';
    this.surname = '';
  }

}
