const request = require("request");
const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

function getWeatherData(city, callback) {
  const url = BASE_URL + city + "&units=metric&lang=fr";
  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const weatherData = JSON.parse(body);
      callback(null, weatherData);
    }
  });
}

// Exemple
getWeatherData("Sousse", function (error, data) {
  if (error) {
    console.log("Erreur: ", error);
  } else {
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    console.log(`Description: ${description}`);
    console.log(`Température: ${temperature}°C`);
    console.log(`Humidité: ${humidity}%`);
  }
});
