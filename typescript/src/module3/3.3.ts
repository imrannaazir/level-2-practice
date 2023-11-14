{
  // type guard / type narrowing...

  //typeof
  const add = (param1: number, param2: number | string): string | number => {
    if (typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2;
    }
  };
  //   console.log(add(3, 3)); // 6
  //   console.log(add(3, '3')); // "33"

  // in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };
  const getUser = (user: NormalUser | AdminUser): void => {
    // user.name -> if we don't use any guard - we only get name property of the user because it is only common property , if we want to get role property we should use in guard
    if ("role" in user) {
      console.log(`My name is ${user.name}. My role is ${user.role}.`);
    } else {
      console.log(`My name is ${user.name}.`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. X",
  };

  const adminUser: AdminUser = {
    name: "Mr. Y",
    role: "admin",
  };

  getUser(adminUser); //My name is Mr. Y. My role is admin.
  getUser(normalUser); //My name is Mr. X.
}
