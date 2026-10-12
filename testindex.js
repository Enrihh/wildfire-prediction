var myHeaders = new Headers();
myHeaders.append("x-access-token", "openuv-v36o6rmubewswi-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.openuv.io/api/v1/uv?lat=42.44&lng=19.27&alt=100&dt=", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
