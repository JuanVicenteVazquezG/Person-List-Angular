import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from '../person-component/person.model';
import { PersonsServices } from '../persons.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public name: string;
  public surname: string;
  public index: number;
  public editMode: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personsServices: PersonsServices
  ) {}

  ngOnInit() {
    this.index = this.route.snapshot.params.id;
    this.editMode = +this.route.snapshot.queryParams.editMode;
    if (this.editMode !== null && this.editMode === 1) {
      const person: Person = this.personsServices.findPerson(this.index);
      this.name = person.human.name;
      this.surname = person.human.surname;
    }
  }

  onSavePerson(): void {
    console.log(this.name, ' ', this.surname);
    if (this.name.trim() === '') {
      return;
    }
    if (this.surname.trim() === '') {
      return;
    }
    const person: Person = new Person({
      name: this.name,
      surname: this.surname,
    });
    if (this.editMode !== null && this.editMode === 1) {
      this.personsServices.modifyPerson(this.index, person);
    } else {
      this.personsServices.addPerson(person);
    }

    this.name = '';
    this.surname = '';
    this.router.navigate(['persons']);
  }

  deletePerson(): void {
    if (this.index != null) {
      this.personsServices.deletePerson(this.index);
    }
    this.router.navigate(['persons']);
  }
}
