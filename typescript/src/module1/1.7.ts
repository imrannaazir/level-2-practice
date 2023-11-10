{
  //spread operator in array
  const bros1: string[] = ["Abul", "Babul", "Kabul"];
  const bros2: string[] = ["Nubul", "Subul"];

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

  const person = { ...info1, ...info2 };

  // rest operator
  const greetFriends = (...friends: string[]) => {
    console.log(friends); //[ 'Abul', 'Babul', 'kabul' ]
  };

  greetFriends("Abul", "Babul", "kabul");
}
