{
  // Polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day!`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day!`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day!`);
    }
  }

  //create instances
  const person = new Person();
  const student = new Student();
  const developer = new Developer();

  // example 2
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (shape: Shape) => {
    console.log(shape.getArea());
  };

  const unknownShape = new Shape();
  const circle = new Circle(10);
  const rectangle = new Rectangle(4, 6);

  getShapeArea(unknownShape); // 0
  getShapeArea(circle); //314.1592653589793
  getShapeArea(rectangle); // 24
  //
}
