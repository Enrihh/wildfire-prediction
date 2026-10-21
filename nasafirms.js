// nasa_firms.js
const source = "VIIRS_SNPP_NRT";
const countryCode = "MNE"; 
const dayRange = "10"; 
const url = 'https://firms.modaps.eosdis.nasa.gov/mapserver/mapkey_status/?MAP_KEY=' + process.env.NASA_MAP_KEY;
// const url = `https://firms.modaps.eosdis.nasa.gov/api/country/csv/${mapKey}/${source}/${countryCode}/${dayRange}`;
console.log(url)
fetch(url)
  .then(response => response.text()) 
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
