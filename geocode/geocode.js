const fs = require("fs");
const request = require("request");

const fn = "C:\\Development\\googlekey.txt";

const geocodeAddress = (searchTerm, callback) => {
  const key = fs.readFileSync(fn);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${key}`;

  request(
    {
      url,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("There was an error calling the geocode API", null);
      } else if (body.status === "ZERO_RESULTS") {
        callback("Unable to find address on geocode API", null);
      } else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
