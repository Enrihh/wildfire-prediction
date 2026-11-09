// openweather.js
 
const lat = "42.44";
const lng = "19.27";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;

fetch(url)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(result => {
    const data = {
      temp: result.main.temp,
      temp_min: result.main.temp_min,
      temp_max: result.main.temp_max,
      pressure: result.main.pressure,
      humidity: result.main.humidity,
      ground_lvl: result.main.grnd_level,
     wind_speed: result.wind.speed,
     wind_degree: result.wind.deg,
     clouds: result.clouds.all
    };
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => console.error('error', error));

