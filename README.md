# 🌍 TP1 : Introduction aux APIs RESTful  
📅 **Année Universitaire** : 2024/2025  
📚 **Matière** : SoA et Microservices  
👨‍🏫 **Enseignant** : Dr. Salah Gontara  
🎓 **Classe** : 4 Info  

---

## 🏆 Objectifs  
- Comprendre les **principes de l'API RESTful**  
- Manipuler les données au **format JSON**  

## 🛠 Outils Utilisés  
- **Node.js**  
- **API OpenWeatherMap**  
- **Bibliothèques :** `request`, `fetch`, `axios`  

---

## 🌤 Intégration de l'API OpenWeatherMap  
[OpenWeatherMap](https://openweathermap.org/api) est un service en ligne qui fournit des **données météorologiques mondiales** via une API.  

### ✅ Étapes :  
1. **S’inscrire** sur [OpenWeatherMap](https://openweathermap.org/api) et obtenir une clé API.  
2. **Comprendre les endpoints** et paramètres de l'API.  
3. **Écrire un script en JavaScript** pour :  
   - Faire des requêtes API avec `request`  
   - Analyser et afficher les données météo pour **Sousse** :  
     - **Description**  
     - **Température**  
     - **Humidité**  
4. Modifier la requête pour **obtenir les données en français et en unités métriques**.  
5. **Remplacer `request` par `fetch` et `axios`** pour comparer les méthodes.  
6. **Tester d'autres APIs RESTful** :  
   - 📖 [Open Library API](https://openlibrary.org/developers/api)  
   - 🚀 [NASA API](https://api.nasa.gov/)  
   - 👤 [RandomUser API](https://randomuser.me/)  

---

## 💻 Implémentation  

### 🔹 1️⃣ Code avec `request`  
```javascript
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

```
### 🔹 2️⃣ Code avec `fetch`
```javascript
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

```
### 🔹 3️⃣ Code avec `axios`
```javascript
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
```
