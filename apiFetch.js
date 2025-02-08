const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

function getWeatherData(city) {
  const url = BASE_URL + city + "&units=metric&lang=fr";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      console.log(`Description: ${description}`);
      console.log(`Température: ${temperature}°C`);
      console.log(`Humidité: ${humidity}%`);
    })
    .catch((error) => console.log("Erreur: ", error));
}

getWeatherData("Sousse");
