// ======================================================
// 🌸 Weather Teller Studio
// Open-Meteo Service
// ======================================================

import { API } from "../../config/api.js";

export async function fetchOpenMeteoWeather(latitude, longitude) {

    const params = new URLSearchParams({

        latitude,
        longitude,

        current: [

            "temperature_2m",
            "relative_humidity_2m",
            "weather_code",
            "wind_speed_10m",
            "surface_pressure"

        ].join(",")

    });

    const response = await fetch(`${API.OPEN_METEO}?${params}`);

    if (!response.ok) {

        throw new Error(`HTTP ${response.status}`);

    }

    const json = await response.json();

    return {

        weatherCode: json.current.weather_code,

        temperature: json.current.temperature_2m,

        humidity: json.current.relative_humidity_2m,

        windSpeed: json.current.wind_speed_10m,

        pressure: json.current.surface_pressure,

        uvIndex: null,

        forecast: []

    };

}