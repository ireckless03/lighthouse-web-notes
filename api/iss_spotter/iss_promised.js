const request = require('request-promise-native');


const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = (ip) => {
  const coordsIP = `http://ipwho.is/${ip}?format=json`;
  return request(coordsIP);
};

const fetchISSFlyOverTimes = function(lat, long) {
  const flyoverURL = `https://iss-flyover.herokuapp.com/json/?lat=${lat}&lon=${long}`;
  return request(flyoverURL);
};

const nextISSTimesForMyLocation = function(flyoverTimes) {
  for (const pass of flyoverTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
  
module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation};