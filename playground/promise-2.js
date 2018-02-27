const fs = require("fs");
const request = require("request");

const fn = "C:\\Development\\googlekey.txt";

var geocodeAddress = searchTerm => {
  const key = fs.readFileSync(fn);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${key}`;

  return new Promise((resolve, reject) => {
    request(
      {
        url,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject("There was an error calling the geocode API");
        } else if (body.status === "ZERO_RESULTS") {
          reject("Unable to find address on geocode API");
        } else if (body.status === "OK") {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        }
      }
    );
  });
};

geocodeAddress("fishhoek, cape town")
  .then(location => {
    console.log(JSON.stringify(location, null, 2));
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });
