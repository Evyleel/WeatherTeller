// ======================================================
// 🌸 Weather Teller Studio
// Weather Renderer
// ======================================================

import { DOM } from "./dom.js";

export function renderWeather(weather) {

    if (!weather?.current) return;

    DOM.temperature.textContent =
        `${Math.round(weather.current.temperature)}°`;

    DOM.weatherType.textContent =
        weather.current.type.toUpperCase();

}