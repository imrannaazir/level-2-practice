{
  //type alias
  type Person = {
    name: string;
    age: number;
    isMarried: boolean;
  };

  const person: Person = {
    name: "Emon",
    age: 22,
    isMarried: false,
  };

  type UserName = string;
  type Balance = number;
  type IsAdmin = boolean;
  type Add = (x: number, y: number) => number;

  const userName: UserName = "Joe";
  const balance: Balance = 10000;
  const isAdmin: IsAdmin = true;

  const add: Add = (x, y) => {
    return x + y;
  };
}
