// ======================================================
// 🌸 Weather Teller Studio
// Root Renderer
// ======================================================

import { renderBackground } from "./backgroundRenderer.js";
import { renderWeather } from "./weatherRenderer.js";
import { renderCharacter } from "./characterRenderer.js";

export function render(state) {

    if (!state) return;

    if (state.app.loading) {

        console.log("🌸 Loading weather...");
        return;

    }

    if (state.app.error) {

        console.error(state.app.error);
        return;

    }

    renderBackground(state.weather);

    renderWeather(state.weather);

    renderCharacter(state.hikari);

}