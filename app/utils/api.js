var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '';

// function prepRouteParams () {
// }

// function prepUrl () {
// }

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

function getCurrentWeather (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data
    })
}

// function getForcast () {
// }

module.exports = {
  getCurrentWeather: getCurrentWeather,
  // getForcast: getForcast
};
