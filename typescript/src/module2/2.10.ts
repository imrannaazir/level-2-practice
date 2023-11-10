{
  //nullish coalescing operator
  const isAuthenticated = "null";
  const result = isAuthenticated ?? "Guest";
  console.log({ result }); // { result: 'Guest' }
}
