{
  // function with generics
  const createArray = (param: string) => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const res2 = createArrayWithGenerics<number>(2);

  interface User {
    id: number;
    name: string;
  }
  const user = createArrayWithGenerics<User>({ id: 2, name: "Emon" });
  console.log(user);

  // create generics with tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result = createArrayWithTuple<string, number>("Something", 2);

  console.log(result);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student = addCourseToStudent({ name: "Emon", address: "Canada" });
  console.log(student);
}
