// ======================================================
// 🌸 Weather Teller Studio
// Weather Renderer
// ======================================================

import { DOM } from "./dom.js";
import { weatherIcon } from "../utils/helpers.js";

export function renderWeather(weather) {

    if (!weather?.current) return;

    const current = weather.current;

    if (DOM.temperature) {

        DOM.temperature.textContent =
            `${Math.round(current.temperature)}°`;

    }

    if (DOM.weatherType) {

        DOM.weatherType.textContent =
    `${weatherIcon(current.type)} ${current.type}`;

    }

    if (DOM.city && weather.city) {

        DOM.city.textContent =
            `📍 ${weather.city}`;

    }

    if (DOM.humidity) {

        DOM.humidity.textContent =
            `${current.humidity}%`;

    }

    if (DOM.wind) {

        DOM.wind.textContent =
            `${Math.round(current.windSpeed)} km/h`;

    }

    if (DOM.pressure) {

        DOM.pressure.textContent =
            `${current.pressure} hPa`;

    }

    if (DOM.uv) {

        DOM.uv.textContent =
            current.uvIndex ?? "--";

    }

}