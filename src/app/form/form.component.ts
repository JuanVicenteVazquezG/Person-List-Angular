import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Person } from '../class/person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent {
  // public name: string;
  // public surname: string;
  @Output() createdPerson: EventEmitter<Person>;
  @ViewChild('name') name: ElementRef;
  @ViewChild('surname') surname: ElementRef;

  constructor() {
    this.createdPerson = new EventEmitter<Person>();
  }

  onAddPerson(): void {
    if (this.name.nativeElement.value === '') { return; }
    if (this.surname.nativeElement.value === '') { return; }
    const person: Person = new Person(
      {
        name: this.name.nativeElement.value,
        surname: this.surname.nativeElement.value
      });
    console.log(name);
    this.createdPerson.emit(person);
    this.name.nativeElement.value = '';
    this.surname.nativeElement.value = '';
  }

}
