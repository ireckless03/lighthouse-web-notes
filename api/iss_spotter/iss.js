const request = require("request");

const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    if (error) {
      return callback(error, null);
    }
    return callback(null,ip);
  });
};

const fetchCoordsByIP = function(ip,callback) {
  const coordsIP = `http://ipwho.is/${ip}?format=json`;
  request(coordsIP, (error, response, body) => {
    if (error) {
      return callback("Address not found",null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(error(msg), null);
      return;
    }
    const parsedBody = JSON.parse(body);
    const {latitude, longitude} = parsedBody;
    if (!parsedBody.success) {
      console.log(parsedBody);
      return callback('Invalid IP', null);
    }
    let coordinate = {
      latitude,
      longitude,
    };
    return callback(null,coordinate);

  });
};


const fetchISSFlyOverTimes = function(coords, callback) {
  let coordinates = [];
  coordinates.push(coords.latitude,coords.longitude);
  const flyoverURL = `https://iss-flyover.herokuapp.com/json/?lat=${coordinates[0]}&lon=${coordinates[1]}`;
  request(flyoverURL, (error, resp, body) => {
    if (error) {
      return callback("Address not found",null);
    }

    if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${body}`;
      return callback(error(msg), null);
    }

    const data = JSON.parse(body);
    const {response} = data;
    console.log(response);

    if (!error) {
      return callback(null, response);
    }
  
  });

};


module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};