{
  //generic type

  type GenericArray<T> = Array<T>;

  // const rolls:number[] = [1,3,4];
  // const rolls:Array<number> = [1,3,4];
  const rolls: GenericArray<number> = [1, 3, 4];

  // const users : string[] = ['Mr.X','Mr. Y','Mr. Z'];
  // const users : Array<string> = ['Mr.X','Mr. Y','Mr. Z'];
  const users: GenericArray<string> = ["Mr.X", "Mr. Y", "Mr. Z"];

  const students: GenericArray<{ name: string; roll: number }> = [
    {
      name: "Mr. X",
      roll: 1,
    },
    {
      name: "Mr. Y",
      roll: 2,
    },
  ];

  // tuple
  type GenericTuple<x, y> = [x, y];

  const user: GenericTuple<number, string> = [1, "Mr. X"];

  const student: GenericTuple<number, { name: string; age: number }> = [
    2,
    { name: "Mr. Y", age: 11 },
  ];
}
