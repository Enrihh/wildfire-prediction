// accuweather.js
const apiKey = "zpka_86350ea978ea410182979f069293e337_143d1061";

const locationKey = "317187"; 

const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`;

fetch(url)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
