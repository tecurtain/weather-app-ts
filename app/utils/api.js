var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '';

// function prepRouteParams () {
// }

// function prepUrl () {
// }
//
// function getQueryStringData () {
// }

function getCurrentWeather (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather
};
