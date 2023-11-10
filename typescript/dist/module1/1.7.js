"use strict";
{
    //spread operator in array
    const bros1 = ["Abul", "Babul", "Kabul"];
    const bros2 = ["Nubul", "Subul"];
    bros1.push(...bros2);
    //spread operator in Object
    const info1 = {
        name: "Emon",
        age: 22,
        isMarried: false,
    };
    const info2 = {
        address: "BD",
        blood: "B+",
    };
    const person = Object.assign(Object.assign({}, info1), info2);
    // rest operator
    const greetFriends = (...friends) => {
        console.log(friends); //[ 'Abul', 'Babul', 'kabul' ]
    };
    greetFriends("Abul", "Babul", "kabul");
}
