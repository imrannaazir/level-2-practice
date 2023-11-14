{
  // oop inheritance

  // parent class
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numbersOfHour: number) {
      console.log(`${this.name} sleeps ${numbersOfHour} hours`);
    }
  }

  //   children inherit from parent
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  //children inherit from parent
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(
        `${this.designation} ${this.name} takes ${numberOfClass} class.`
      );
    }
  }

  const student = new Student("Emon", 22, "BD");
  const teacher = new Teacher("Mr. X", 43, "BD", "Professor");
  student.getSleep(2);
  teacher.takeClass(3);
}
