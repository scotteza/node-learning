const fs = require("fs");
const request = require("request");

const fn = "C:\\Development\\googlekey.txt";

const geocodeAddress = (searchTerm, callBack) => {
  const key = fs.readFileSync(fn);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${key}`;

  request(
    {
      url,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callBack("There was an error", null);
      } else if (body.status === "ZERO_RESULTS") {
        callBack("Unable to find address", null);
      } else if (body.status === "OK") {
        callBack(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
