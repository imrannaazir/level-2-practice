{
  //union type
  type FrontEndDevelope = "React Developer" | "Next JS Developer";
  type FullStackDeveloper = "MERN Developer" | "Expert Developer";

  type ProDeveloper = FrontEndDevelope | FullStackDeveloper;

  const newDeveloper: ProDeveloper = "Next JS Developer";

  // union type as object property
  type Person = {
    name: string;
    age?: number;
    blood: "A+" | "A-" | "B+" | "B-";
  };

  const person: Person = {
    name: "Emon",
    blood: "B+",
  };

  //intersection type
  type Info1 = {
    name: string;
    age: number;
  };

  type Info2 = {
    address: string;
    isMarried: boolean;
  };

  type Info = Info1 & Info2;

  const virat: Info = {
    name: "Virat Kohli",
    age: 23,
    address: "Uganda",
    isMarried: false,
  };
}
