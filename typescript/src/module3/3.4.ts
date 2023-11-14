{
  //type guard in oop
  // instanceof operator
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`I am making sound!`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`I am barking!`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log(`I am meawing!`);
    }
  }

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const cat = new Cat("Jeary", "cat"); // this cat obj is an instance  of Cat class
  const dog = new Dog("Tom", "dog"); // this dog obj is an instance  of Dog class
  getAnimal(dog); // I am barking!
  getAnimal(cat); // I am  meawing!

  // dog.makeBark();
  // cat.makeMeaw();
}
