{
  // statics in oop
  class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  Counter.increment();
  console.log(Counter.count); // 1

  Counter.decrement();
  console.log(Counter.count); //2

  //
}
