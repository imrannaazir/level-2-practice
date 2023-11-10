{
  //ternary operator
  const age: number = 18;
  const isAdult = age >= 18 ? "adult" : "Not adult";
  console.log(isAdult);

  //nullish coalescing operator
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }); // { result1: 'Guest' }
  console.log({ result2 }); //{ result2: 'Guest' }
}
