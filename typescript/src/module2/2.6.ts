{
  //constraints
  const addCourseToStudent = <
    T extends { name: string; id: number; gmail: string }
  >(
    student: T
  ) => {
    const course = "Next level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student = addCourseToStudent({
    name: "Emon",
    id: 2,
    gmail: "emon@gmail.com",
    address: "Canada",
  });
  console.log(student);
}
