// nasa_firms.js
const mapKey = "43004033a4bcf163e8b228d40ed256b5";
const source = "VIIRS_SNPP_NRT";
const countryCode = "MNE"; 
const dayRange = "10"; 

const url = `https://firms.modaps.eosdis.nasa.gov/api/country/csv/${mapKey}/${source}/${countryCode}/${dayRange}`;

fetch(url)
  .then(response => response.text()) 
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
