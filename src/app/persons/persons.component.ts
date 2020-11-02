import { Component, OnInit } from '@angular/core';
import { Person } from '../class/person.model';
import { LogginService } from '../class/LogginService.service';
import { PersonsServices } from '../class/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {

  public persons: Array<Person>;

  constructor(private LoggedService: LogginService,
              private personsService: PersonsServices) {
  }

  ngOnInit(): void {
    this.persons = this.personsService.persons;
  }

}
