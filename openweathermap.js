// openweather.js
 
const lat = "42.44";
const lng = "19.27";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
