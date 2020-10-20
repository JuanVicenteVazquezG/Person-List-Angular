import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../class/person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent {
  // public name: string;
  // public surname: string;
  @Output() createdPerson: EventEmitter<Person>;

  constructor() {
    this.createdPerson = new EventEmitter<Person>();
  }

  onAddPerson(name: HTMLInputElement, surname: HTMLInputElement): void {
    if (name.value.trim() === '') { return; }
    if (surname.value.trim() === '') { return; }
    const person: Person = new Person({ name: name.value, surname: surname.value });
    console.log(name);
    this.createdPerson.emit(person);
    name.value = '';
    surname.value = '';
  }

}
