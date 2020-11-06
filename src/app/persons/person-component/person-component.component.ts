import { Component, Input } from '@angular/core';
import { Person } from './person.model';
import { PersonsServices } from '../persons.service';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',

})
export class PersonComponentComponent {
  @Input() person: Person;
  @Input() index: number;

  constructor(private personsServices: PersonsServices) {
  this.personsServices.greet.subscribe(this.showAlert);
  }

  greetingEmit(): void{
    this.personsServices.greet.emit (this.index);
  }

  showAlert(index: number): void{
    alert(`The index is ${index}`);
  }

}
