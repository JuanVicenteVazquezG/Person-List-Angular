import { Component, ElementRef, ViewChild } from '@angular/core';
import { Person } from '../class/person.model';
import { LogginService } from '../class/LogginService.service';
import { PersonsServices } from '../class/persons.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  @ViewChild('name') name: ElementRef;
  @ViewChild('surname') surname: ElementRef;

  constructor(private logginService: LogginService,
              private personsServices: PersonsServices) {
  }

  onAddPerson(): void {
    if (this.name.nativeElement.value.trim() === '') { return; }
    if (this.surname.nativeElement.value.trim() === '') { return; }
    const person: Person = new Person(
      {
        name: this.name.nativeElement.value,
        surname: this.surname.nativeElement.value
      });
    console.log(person);
    this.personsServices.addPerson(person);
    this.name.nativeElement.value = '';
    this.surname.nativeElement.value = '';
  }

}
