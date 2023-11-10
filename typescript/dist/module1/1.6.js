"use strict";
{
    //method
    const poorPeople = {
        name: "Emon",
        balance: 0,
        addBalance(balance) {
            return `My balance is ${balance + this.balance}`;
        },
    };
    console.log(poorPeople.addBalance(500));
}
