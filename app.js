// console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

const user = os.userInfo();
const userName = user ? user.username : "unknown human";

console.log(notes.addNote());
console.log(notes.add(1, -99999999));

// fs.appendFile(
//   "greetings.txt",
//   `Howdy ${userName}! You are ${notes.age} years old!\r\n`,
//   err => {
//     if (err) {
//       console.log("Error: ", err);
//     }
//   }
// );
