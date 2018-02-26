const fs = require("fs");
const fn = "C:\\Development\\googlekey.txt";
const request = require("request");
const yargs = require("yargs");

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

const key = fs.readFileSync(fn);
const searchTerm = encodeURIComponent(argv.a);

const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${key}`;
// console.log(url);

request(
  {
    url,
    json: true
  },
  (error, response, body) => {
    if (error) {
      console.log("There was an error");
    } else if (body.status === "ZERO_RESULTS") {
      console.log("No results found");
    } else if (body.status === "OK") {
      // console.log(JSON.stringify(response, undefined, 2));
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  }
);
