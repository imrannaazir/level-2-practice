function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toString()}`);
}

greet("Emon", new Date());

// union type narrow
const welcomePeople = (x: string[] | string) => {
  if (Array.isArray(x)) {
    console.log(x.join(" and "));
  } else {
    console.log(x);
  }
};

//method
const poorPeople = {
  name: "Emon",
  balance: 0,
  addBalance(balance: number) {
    return `My balance is ${balance + this.balance}`;
  },
};

poorPeople.addBalance(500);

welcomePeople("Abul");
welcomePeople(["Babul", "kabul"]);
