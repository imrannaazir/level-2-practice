{
  //generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually

  type Owner2 = keyof Vehicle;

  const person: Owner2 = "car";

  // const getPropertyValue = <X,Y extends "name" | "age" | "email" > (obj:X,key:Y)=>{
  //     return obj[key];
  // }
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result = getPropertyValue(
    { name: "Emon", age: 22, gmail: "emon@gmail.com" },
    "age"
  );

  console.log(result);
}
