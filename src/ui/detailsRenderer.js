// ======================================================
// 🌸 Weather Teller Studio
// Details Renderer
// ======================================================

import { DOM } from "./dom.js";

export function renderDetails(weather) {

    if (!weather?.current) return;

    const current = weather.current;

    if (DOM.humidity)
        DOM.humidity.textContent = `${current.humidity}%`;

    if (DOM.wind)
        DOM.wind.textContent = `${Math.round(current.windSpeed)} km/h`;

    if (DOM.pressure)
        DOM.pressure.textContent = `${current.pressure} hPa`;

    if (DOM.uv)
        DOM.uv.textContent = current.uvIndex ?? "--";

}