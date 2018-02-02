console.log("Start app");

const fs = require("fs");
const os = require("os");

const user = os.userInfo();
const userName = user ? user.username : "unknown human";

fs.appendFile("greetings.txt", `Howdy ${userName}\r\n`, err => {
  if (err) {
    console.log("Error: ", err);
  }
});

console.log("End app");
