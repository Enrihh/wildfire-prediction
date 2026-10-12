// openmeteo.js
const lat = "42.44";
const lng = "19.27";

const startDate = "2000-01-01"; 
const endDate = "2026-01-01";

const url = `https://api.open-meteo.com/v1/forecast?latitude=42.44&longitude=19.27&hourly=temperature_2m,apparent_temperature,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_to_1cm,soil_moisture_1_to_3cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm,soil_moisture_27_to_81cm&timezone=Europe%2FBerlin`;

fetch(url)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
