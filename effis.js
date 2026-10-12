// effis.js

const lat = "42.44";
const lng = "19.27";
const date = "2026-08-01";


const url = `https://effis.jrc.ec.europa.eu/`;

fetch(url)
  .then(response => {
    console.log("Status code:", response.status);
    return response.text(); 
  })
  .then(result => {
    console.log("Response preview:", result.slice(0, 500));
  })
  .catch(error => console.log('error', error));
