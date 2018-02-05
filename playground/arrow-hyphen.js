const square = x => x * x;
console.log(square(9));

var user = {
  name: "scott",

  // Demonstrating "this" binding with functions on object literals
  sayHi: () => {
    // Here we will get the global arguments variable
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt() {
    // Here we will get the local arguments variable
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);
