const fs = require("fs");
const yargs = require("yargs");
const axios = require("axios");

const googleKeyFileName = "C:\\Development\\googlekey.txt";
const weatherKeyFileName = "C:\\Development\\weatherkey.txt";

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

const searchTerm = encodeURIComponent(argv.a);
const googleKey = fs.readFileSync(googleKeyFileName);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${googleKey}`;

axios
  .get(geocodeUrl)
  .then(response => {
    if (response.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address");
    }

    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    const weatherKey = fs.readFileSync(weatherKeyFileName);
    const weatherUrl = `https://api.darksky.net/forecast/${weatherKey}/${latitude},${longitude}?units=ca`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then(response => {
    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;
    console.log(
      `It's currently ${temperature}. It feels like it's ${apparentTemperature}`
    );
  })
  .catch(e => {
    if (e.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers");
    } else {
      console.log(e.message);
    }
  });
