const fs = require("fs");
const fn = "C:\\Development\\googlekey.txt";
const request = require("request");

const key = fs.readFileSync(fn);
const searchTerm = "1301%20lombard%20street%20philadelphia";

const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${key}`;

console.log(url);

request(
  {
    url,
    json: true
  },
  (error, response, body) => {
    if (body) {
      console.log(JSON.stringify(body, undefined, 2));
    }
  }
);
