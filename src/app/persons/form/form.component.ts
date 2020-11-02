import { Component, ElementRef, ViewChild } from '@angular/core';
import { Person } from '../../class/person.model';
import { LogginService } from '../../class/LogginService.service';
import { PersonsServices } from '../../class/persons.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  public name: string;
  public surname: string;

  constructor(private logginService: LogginService,
              private personsServices: PersonsServices) {
  }

  onAddPerson(): void {
    console.log(this.name, ' ' , this.surname);
    if (this.name.trim() === '') { return; }
    if (this.surname.trim() === '') { return; }
    const person: Person = new Person(
      {
        name: this.name,
        surname: this.surname
      });
    this.personsServices.addPerson(person);
    this.name = '';
    this.surname = '';
  }

}
