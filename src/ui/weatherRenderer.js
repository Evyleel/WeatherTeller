import { DOM } from "./dom.js";

export function renderWeather(weather) {

    if (!weather?.current) return;

    DOM.temperature.textContent =
        `${weather.current.temperature}°C`;

    DOM.weatherType.textContent =
        weather.current.type;

}