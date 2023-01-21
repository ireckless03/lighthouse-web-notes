const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  fetchCoordsByIP(ip,(error, coordinates) => {
    if (error) {
      return console.log(error);
    }
    console.log('It worked!',coordinates);
    
    fetchISSFlyOverTimes(coordinates,(error, response) => {
      if (error) {
        return console.log(error);
      }
      console.log('Flyover Times!',response);
    });
  });

});