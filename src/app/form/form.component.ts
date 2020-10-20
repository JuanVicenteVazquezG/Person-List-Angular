import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Person } from '../class/person.model';
import { LogginService } from '../class/LogginService.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [LogginService]
})

export class FormComponent {
  // public name: string;
  // public surname: string;
  @Output() createdPerson: EventEmitter<Person>;
  @ViewChild('name') name: ElementRef;
  @ViewChild('surname') surname: ElementRef;

  constructor(private logginService: LogginService) {
    this.createdPerson = new EventEmitter<Person>();
  }

  onAddPerson(): void {
    if (this.name.nativeElement.value.trim() === '') { return; }
    if (this.surname.nativeElement.value.trim() === '') { return; }
    const person: Person = new Person(
      {
        name: this.name.nativeElement.value,
        surname: this.surname.nativeElement.value
      });
    this.logginService.sendMessageToConsole(`Send person: ${this.name.nativeElement.value}`);
    this.createdPerson.emit(person);
    this.name.nativeElement.value = '';
    this.surname.nativeElement.value = '';
  }

}
