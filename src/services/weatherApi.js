// ======================================================
// 🌸 Weather Teller Studio
// Weather API Service
// ======================================================

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeather(latitude, longitude) {

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

    const response = await fetch(`${BASE_URL}?${params}`);

    if (!response.ok) {

        throw new Error("Failed to fetch weather.");

    }

    const data = await response.json();

    return {

        weatherCode: data.current.weather_code,

        temperature: data.current.temperature_2m,

        humidity: data.current.relative_humidity_2m,

        windSpeed: data.current.wind_speed_10m,

        pressure: data.current.surface_pressure,

        uvIndex: null

    };

}