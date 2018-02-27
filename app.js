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
    weather.getWeather(
      geocodeResults.latitude,
      geocodeResults.longitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(
            `It is currently ${weatherResults.temperature} degress in ${
              geocodeResults.address
            }. The apparent temperature is ${
              weatherResults.apparentTemperature
            } degrees.`
          );
        }
      }
    );
  }
});
