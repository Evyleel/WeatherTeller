// ======================================================
// 🌸 Weather Teller Studio
// Weather API
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

    const json = await response.json();

    return {

        weatherCode: json.current.weather_code,

        temperature: json.current.temperature_2m,

        humidity: json.current.relative_humidity_2m,

        windSpeed: json.current.wind_speed_10m,

        pressure: json.current.surface_pressure

    };

}