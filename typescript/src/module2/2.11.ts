{
  //utility type

  // pick utility
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //omit utility
  type ContactInfo = Omit<Person, "name" | "age">;

  // required utility
  type RequiredPerson = Required<Person>;

  //Partial utility
  type PartialPerson = Partial<Person>;

  //Readonly
  type ReadonlyPerson = Readonly<Person>;

  const person1: ReadonlyPerson = {
    name: "Mr. X",
    age: 200,
    contactNo: "0234234",
  };

  //   person1.name="Mr Y"
  //  got error: Cannot assign to 'name' because it is a read-only property.

  // Record utility
  type MyObj = Record<string, number>;
}
