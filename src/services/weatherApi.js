// ======================================================
// 🌸 Weather Teller Studio
// Weather API
// ======================================================

export async function fetchWeather(latitude, longitude){

    const url =

`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,surface_pressure`;

    const response = await fetch(url);

    if(!response.ok){

        throw new Error("Failed to fetch weather.");

    }

    const data = await response.json();

    return{

        weatherCode:

            data.current.weather_code,

        temperature:

            data.current.temperature_2m,

        humidity:

            data.current.relative_humidity_2m,

        windSpeed:

            data.current.wind_speed_10m,

        pressure:

            data.current.surface_pressure,

        uvIndex:0

    };

}