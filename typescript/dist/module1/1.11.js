"use strict";
{
    //ternary operator
    const age = 18;
    const isAdult = age >= 18 ? "adult" : "Not adult";
    console.log(isAdult);
    //nullish coalescing operator
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 });
    console.log({ result2 });
}
