import { Component, OnInit } from '@angular/core';
import { Person } from './class/person.model';
import { LogginService } from './class/LogginService.service';
import { PersonsServices } from './class/persons.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title: string;
  public persons: Array<Person>;

  constructor(private LoggedService: LogginService,
              private personsService: PersonsServices) {
    this.title = 'Angular Persons List Practice';
  }

  ngOnInit(): void {
    this.persons = this.personsService.persons;
  }



}
