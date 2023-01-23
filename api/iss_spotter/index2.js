const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
  .then(body => {
    let response = JSON.parse(body);
    let ip = response.ip;
    fetchCoordsByIP(ip)
      .then(body => {
        const data = JSON.parse(body);
        const {latitude, longitude} = data;
        console.log(latitude, longitude);
        fetchISSFlyOverTimes(latitude, longitude)
          .then(body => {
            const data = JSON.parse(body);
            const flyover = data.response;
            nextISSTimesForMyLocation(flyover);
          });
      });
  })

  .catch(err => console.log(err));