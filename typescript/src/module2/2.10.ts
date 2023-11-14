{
  //mapped type
  const arrayOfNumbers: number[] = [1, 2, 3];

  //  const arrayOfStrings : string[] = ['1','2','3'];
  const arrayOfStrings: string[] = arrayOfNumbers.map(
    (element: number): string => element.toString()
  );
  console.log(arrayOfStrings); // get same thing using map

  type AreaNumber = {
    height: number;
    width: number;
  };

  type HeightType = AreaNumber["height"];

  //if we need another type with same property with different data type
  // type AreaString = {
  //   height: number;
  //   width: number;
  // };

  // same thing with map type
  // type AreaString = {
  //   [prop in "name" | "age"| "address"]: string
  // }

  // key/index(this are convention, we can put any word it works same) in "name" | "age"| "address", key/index will be name/age/address by looping and finally we will get new AreaString type;
  //   type AreaString = {
  //     name: string;
  //     age: string;
  //     address: string;
  // }

  // we already know about keyof operator that provides us all the keys of property of a type as an union type;
  // type KeyofType = keyof AreaString
  // type KeyofType = "name" | "age" | "address"

  // before we used map type operator statically , now we will do this dynamically using keyof operator

  // type AreaString = {
  //   [key in keyof AreaNumber]:string
  // }

  // // as a result we will get
  // type AreaString = {
  //     height: string;
  //     width: string;
  // }

  // generic type with map type
  type AreaString<T> = {
    //T will be looping and in the key we get key of T one by one
    [key in keyof T]: T[key]; // lookup type
  };

  const area: AreaString<{ height: string; width: number }> = {
    height: "12",
    width: 12,
  };
}
