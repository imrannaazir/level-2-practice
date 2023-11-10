{
  //type assertion
  let anything: any;

  anything = "Next level web development";
  console.log((anything as string).length);

  const kgToGm = (value: number | string): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `value is :${convertedValue}`;
    }

    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(200) as number;
  const result2 = kgToGm("100") as string;
}
