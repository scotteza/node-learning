const yargs = require("yargs");
const geocode = require("./geocode/geocode");

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
geocode.geocodeAddress(searchTerm, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
