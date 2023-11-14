{
  //abstraction in oop
  // abstraction : 1. interface 2. abstract class

  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting car engine!`);
    }

    stopEngine(): void {
      console.log(`I am stopping`);
    }

    move(): void {
      console.log(`I am moving!`);
    }
  }

  // with abstract class
  class Car2 implements Vehicle2 {
    startEngine(): void {
      console.log(`I am starting the car engine!`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car!`);
    }
    crush(): void {
      console.log(`I am gonna crush the car!`);
    }
  }
}
