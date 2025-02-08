const axios = require("axios");
const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

function getWeatherData(city) {
  const url = BASE_URL + city + "&units=metric&lang=fr";
  axios
    .get(url)
    .then((response) => {
      const description = response.data.weather[0].description;
      const temperature = response.data.main.temp;
      const humidity = response.data.main.humidity;
      console.log(`Description: ${description}`);
      console.log(`Température: ${temperature}°C`);
      console.log(`Humidité: ${humidity}%`);
    })
    .catch((error) => console.log("Erreur: ", error));
}

getWeatherData("Sousse");
