// openweather.js
const apiKey = "2cd92857f696674d056b0e384c04b5e2"; 
const lat = "42.44";
const lng = "19.27";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
