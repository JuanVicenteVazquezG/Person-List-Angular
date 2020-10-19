type PersonType = {
  name: string;
  surname: string;
};

export class Person<P = PersonType>{

  constructor(public human: P) {
  }
}
