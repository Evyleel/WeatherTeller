import { DOM } from "./dom.js";

export function renderWeather(weather){

    DOM.temperature.textContent =
        `${weather.current.temperature}°`;

    DOM.weather.textContent =
        weather.current.type;

}