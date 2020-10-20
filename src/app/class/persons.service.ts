import { Person } from '../class/person.model';

export class PersonsServices {
  public persons: Array<Person>;

  constructor() {
    this.persons = [
      new Person({ name: 'Juan', surname: 'Vazquez Lopez' }),
      new Person({ name: 'Laura', surname: 'Perez' })
    ];
  }
  addPerson(person: Person): void {
    this.persons.push(person);
    console.log(this.persons);
  }

}
