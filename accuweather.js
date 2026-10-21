// accuweather.js

const locationKey = "317187"; 

const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.ACCUWEATHER_API_KEY}&details=true`;

fetch(url)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
