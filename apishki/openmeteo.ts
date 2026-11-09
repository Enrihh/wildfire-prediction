// openmeteo.js
const lat = 42.44;
const lng = 19.27;

import { fetchWeatherApi } from "openmeteo";

const params = {
	latitude: lat,
	longitude: lng,
	hourly: ["temperature_2m", "relative_humidity_2m", "dew_point_2m", "precipitation_probability", "precipitation", "rain", "snowfall", "showers", "snow_depth", "weather_code", "surface_pressure", "cloud_cover", "cloud_cover_low", "cloud_cover_mid", "cloud_cover_high", "evapotranspiration", "vapour_pressure_deficit", "wind_speed_10m", "wind_speed_80m", "wind_direction_10m", "wind_direction_80m", "wind_gusts_10m", "temperature_80m", "soil_temperature_0cm", "soil_temperature_6cm", "soil_moisture_0_to_1cm", "soil_moisture_1_to_3cm", "soil_moisture_3_to_9cm", "uv_index", "sunshine_duration", "is_day", "cape", "convective_inhibition"],
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
	`\nCoordinates: ${latitude}°N ${longitude}°E`,
	`\nElevation: ${elevation}m asl`,
	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	hourly: {
		time: Array.from(
			{ length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, 
			(_ , i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
		),
		temperature_2m: hourly.variables(0)!.valuesArray(),
		relative_humidity_2m: hourly.variables(1)!.valuesArray(),
		dew_point_2m: hourly.variables(2)!.valuesArray(),
		precipitation_probability: hourly.variables(3)!.valuesArray(),
		precipitation: hourly.variables(4)!.valuesArray(),
		rain: hourly.variables(5)!.valuesArray(),
		snowfall: hourly.variables(6)!.valuesArray(),
		showers: hourly.variables(7)!.valuesArray(),
		snow_depth: hourly.variables(8)!.valuesArray(),
		weather_code: hourly.variables(9)!.valuesArray(),
		surface_pressure: hourly.variables(10)!.valuesArray(),
		cloud_cover: hourly.variables(11)!.valuesArray(),
		cloud_cover_low: hourly.variables(12)!.valuesArray(),
		cloud_cover_mid: hourly.variables(13)!.valuesArray(),
		cloud_cover_high: hourly.variables(14)!.valuesArray(),
		evapotranspiration: hourly.variables(15)!.valuesArray(),
		vapour_pressure_deficit: hourly.variables(16)!.valuesArray(),
		wind_speed_10m: hourly.variables(17)!.valuesArray(),
		wind_speed_80m: hourly.variables(18)!.valuesArray(),
		wind_direction_10m: hourly.variables(19)!.valuesArray(),
		wind_direction_80m: hourly.variables(20)!.valuesArray(),
		wind_gusts_10m: hourly.variables(21)!.valuesArray(),
		temperature_80m: hourly.variables(22)!.valuesArray(),
		soil_temperature_0cm: hourly.variables(23)!.valuesArray(),
		soil_temperature_6cm: hourly.variables(24)!.valuesArray(),
		soil_moisture_0_to_1cm: hourly.variables(25)!.valuesArray(),
		soil_moisture_1_to_3cm: hourly.variables(26)!.valuesArray(),
		soil_moisture_3_to_9cm: hourly.variables(27)!.valuesArray(),
		uv_index: hourly.variables(28)!.valuesArray(),
		sunshine_duration: hourly.variables(29)!.valuesArray(),
		is_day: hourly.variables(30)!.valuesArray(),
		cape: hourly.variables(31)!.valuesArray(),
		convective_inhibition: hourly.variables(32)!.valuesArray(),
	},
};

// The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
console.log("\nHourly data:\n", weatherData.hourly)


