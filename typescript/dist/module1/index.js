"use strict";
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toString()}`);
}
greet("Emon", new Date());
// union type narrow
const welcomePeople = (x) => {
    if (Array.isArray(x)) {
        console.log(x.join(" and "));
    }
    else {
        console.log(x);
    }
};
//method
const poorPeople = {
    name: "Emon",
    balance: 0,
    addBalance(balance) {
        return `My balance is ${balance + this.balance}`;
    },
};
poorPeople.addBalance(500);
welcomePeople("Abul");
welcomePeople(["Babul", "kabul"]);
