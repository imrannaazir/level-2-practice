{
  // promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data.");
      }
    });
  };

  //calling create promise function
  const showData = async (): Promise<string> => {
    const data = await createPromise();
    console.log(data);
    return data;
  };

  showData();

  const fetchToDos = async (): Promise<
    {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }[]
  > => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
    return data;
  };

  fetchToDos();
}
