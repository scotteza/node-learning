const fs = require("fs");
const request = require("request");

const fn = "C:\\Development\\weatherkey.txt";

const getWeather = (latitude, longitude, callback) => {
  const key = fs.readFileSync(fn);
  const url = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`;
  request(
    {
      url,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("There was an error calling the weather API", null);
      } else if (response.statusCode !== 200) {
        callback(
          `There was an error calling the weather API - HTTP response code ${
            response.statusCode
          }`,
          null
        );
      } else {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
    }
  );
};

module.exports.getWeather = getWeather;
