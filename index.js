
var myHeaders = new Headers();

myHeaders.append("x-access-token", process.env.UVINDEX_TOKEN_KEY);
myHeaders.append("Content-Type", "application/json");
console.log(process.env.UVINDEX_TOKEN_KEY);

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
