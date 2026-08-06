// ======================================================
// 🌸 Weather Teller Studio
// Weather View Model
// ======================================================

export function createWeatherViewModel(weather) {

    const current = weather.current;

    return {

        temperature: `${Math.round(current.temperature)}°`,

        humidity: `${current.humidity}%`,

        wind: `${Math.round(current.windSpeed)} km/h`,

        pressure: `${current.pressure} hPa`,

        uv: current.uvIndex ?? "--",

        type: current.type,

        city: weather.city ?? "Unknown"

    };

}