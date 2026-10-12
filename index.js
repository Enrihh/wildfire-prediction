
var myHeaders = new Headers();

const openuv_token = "openuv-v36o6rmubewswi-io";

myHeaders.append("x-access-token", openuv_token);
myHeaders.append("Content-Type", "application/json");

const openuv_url = "https://api.openuv.io/api/v1/";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const params = {
  lat: '42.2',
  lng: '19.27',
  alt: '100',
  dt: ''
};


console.log(openuv_url + `?lat=${params.lat}&lng=${params.lng}&alt=${params.alt}&dt=`);
console.log(requestOptions);

fetch(openuv_url + 'uv' + `?lat=${params.lat}&lng=${params.lng}&alt=${params.alt}&dt=`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
