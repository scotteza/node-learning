const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("This function expects number arguments");
      }
    }, 500);
  });
};

asyncAdd(5, 5)
  .then(result => {
    console.log("Result =", result);
    return asyncAdd(result, 5);
  })
  .then(result => {
    console.log("Result + 10 =", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// const successResolving = message => {
//   console.log("Success: ", message);
// };

// const errorResolving = message => {
//   console.log("Error: ", message);
// };

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey, it worked!");
//     // reject("It broke :(");
//   }, 2500);
// });

// somePromise.then(successResolving, errorResolving);
