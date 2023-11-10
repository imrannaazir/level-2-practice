"use strict";
{
    const person = {
        name: {
            firstName: "Imran",
            middleName: "Nazir",
            lastName: "Emon",
        },
        age: 24,
        address: "Keniya",
    };
    const { name: { lastName: nickName }, } = person;
    console.log(nickName); //Emon
    //   array destructuring
    const decimal = ["One", "Two", "Three", "Four", "Five", "Six"];
    const [, , third, fourth, ...rest] = decimal;
    console.log(`${third} & ${fourth}`); //Three & Four
    console.log(rest); //[ 'Five', 'Six' ]
}
