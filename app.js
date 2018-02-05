// console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes.js");

const user = os.userInfo();
const userName = user ? user.username : "unknown human";

/* 
---------------------------------------------------------------------
Calling lodash
---------------------------------------------------------------------
*/

// isString
// console.log(_.isString(true));
// console.log(_.isString("Scott"));
// console.log(_.isString(12));

// uniq
// var scott1 = { fn: "sc", ln: "ed", id: 1 };
// var scott2 = { fn: "sc", ln: "ed", id: 2 };
// var scott3 = scott1;
// var arr1 = ["a",  "b",  "b",  "b",  "b",  "b",  "b",  "b",  "b",  12,  13,  14,  15,  15,  15,  15,  15,  scott1,  scott2,  scott3];
// var arr2 = _.uniq(arr1);
// console.log(arr1);
// console.log(arr2);

/* 
---------------------------------------------------------------------
Using imports from other files
---------------------------------------------------------------------
*/
// console.log(notes.addNote());
// console.log(notes.add(1, -99999999));

/* 
---------------------------------------------------------------------
File appending
---------------------------------------------------------------------
*/
// fs.appendFile(
//   "greetings.txt",
//   `Howdy ${userName}! You are ${notes.age} years old!\r\n`,
//   err => {
//     if (err) {
//       console.log("Error: ", err);
//     }
//   }
// );
