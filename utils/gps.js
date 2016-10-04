/**
 * This is a hack I figured out a while ago. You can just use the open weather
 * API to turn a location into GPS coordinates.
 */

var axios = require('axios');
var Q = require('q');


var OPEN_WEATHER_ENDPOINT = 'api.openweathermap.org';


var count = 0;
module.exports = {
  getCoordinatesForCity: function(city) {
    // var deferred = Q.defer();

    var url = `${OPEN_WEATHER_ENDPOINT}/data/2.5/weather?q=${city}&APPID=${process.env.OPEN_WEATHER_API_KEY}`;

    // console.log(url);

    console.log(count++);
    axios.get(url)
      .then(function(response) {
        console.log('hi');
	// console.log(response);
	// // // // deferred.resolve(response);
      })
      .catch(function(error) {
        console.log('wow');
        console.log(error);
	// // // deferred.reject(error);
      });

    // deferred.resolve(rankings);

    // return deferred.promise;
  }
};
