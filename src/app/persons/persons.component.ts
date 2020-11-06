import { Component, OnInit } from '@angular/core';
import { Person } from './person-component/person.model';
import { LogginService } from '../class/LogginService.service';
import { PersonsServices } from './persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonsComponent implements OnInit {
  public persons: Array<Person>;

  constructor(
    private personsService: PersonsServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personsService.getPersons().subscribe(
      (persons: Person[]) => {
        this.persons = persons;
        this.personsService.setPersons(this.persons);
      },
      (error) => console.log(`Error loading ${error}. `),
    );
  }

  add(): void {
    this.router.navigate(['persons/add']);
  }
}
