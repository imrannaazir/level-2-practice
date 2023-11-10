{
  //generic type with interface
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      year: number;
    };
    smartWatch: T;
  }
  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Emon",
    computer: {
      brand: "Asus",
      model: "something",
      year: 2020,
    },
    smartWatch: {
      brand: "Gorib",
      model: "s2w3u",
      display: "OLED",
    },
  };
}
