{
  //type alias
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoll1 = User1 & { roll: number };

  const user1: UserWithRoll1 = {
    name: "Emon",
    age: 22,
    roll: 434,
  };

  //interface
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRoll2 extends User1 {
    roll: number;
  }

  const user2: UserWithRoll2 = {
    name: "Abul",
    age: 22,
    roll: 55,
  };

  //array
  type Roll1 = number[];
  const roll1: Roll1 = [1, 3, 3];

  interface Roll2 {
    [index: number]: number;
  }

  const roll2: Roll2 = [1, 3, 4];

  // function
  type Add1 = (num1: number, num2: number) => number;
  const add1: Add1 = (num1, num2) => {
    return num1 + num2;
  };

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => {
    return num1 + num2;
  };
}
