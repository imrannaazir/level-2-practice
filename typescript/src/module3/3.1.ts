{
  // class
  //   create class
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    } //method
  }

  //create instance with the class
  const dog = new Animal("German Shepard", "Dog", "Ghew");
  const cat = new Animal("Tom", "cat", "Meaw Meaw");
  cat.makeSound();
}
