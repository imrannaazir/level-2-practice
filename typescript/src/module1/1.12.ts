{
  //nullable tpe
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching!");
    } else {
      console.log("There is nothing to search!");
    }
  };

  searchName(null);

  //unknown type
  const getSpeedInTheMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(convertedSpeed);
    }
  };

  getSpeedInTheMeterPerSecond(1000);
  getSpeedInTheMeterPerSecond("1000 kmh^-1");

  //never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("This will be error");
}
