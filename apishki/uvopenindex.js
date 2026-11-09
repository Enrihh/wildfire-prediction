const openuv_url = "https://api.openuv.io/api/v1/uv";

const myHeaders = new Headers();
myHeaders.append("x-access-token", process.env.UVINDEX_TOKEN_KEY);
myHeaders.append("Content-Type", "application/json");

const params = new URLSearchParams({
  lat: '42.2',
  lng: '19.27',
  alt: '100',
});

fetch(`${openuv_url}?${params}`, { method: 'GET', headers: myHeaders })
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(({ result }) => {
    const data = {
      uv: result.uv,
      uv_max: result.uv_max,
     // uv_max_time: result.uv_max_time,
     // safe_exposure_time: result.safe_exposure_time,
     // sunrise: result.sun_info.sun_times.sunrise,
     // sunset: result.sun_info.sun_times.sunset,
    };
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => console.error('error', error));
