import { Component, Input } from '@angular/core';
import {Person } from '../class/person.model';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',

})
export class PersonComponentComponent {
  @Input() person: Person;
  @Input() index: number;

  constructor() { }

}
