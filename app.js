const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

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
geocode.geocodeAddress(searchTerm, (errorMessage, geocodeResults) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(geocodeResults, undefined, 2));
  }
});

weather.getWeather(37.8267, -122.4233, (errorMessage, weatherResults) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(weatherResults, undefined, 2));
  }
});
