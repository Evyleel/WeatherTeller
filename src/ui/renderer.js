// ======================================================
// 🌸 Weather Teller Studio
// Root Renderer
// ======================================================

import { renderBackground } from "./backgroundRenderer.js";
import { renderWeather } from "./weatherRenderer.js";
import { renderCharacter } from "./characterRenderer.js";
import { renderLoading } from "./loadingRenderer.js";
import { renderError } from "./errorRenderer.js";

export function render(state) {

    if (!state) return;

    if (state.app.loading) {

        renderLoading();
        return;

    }

    if (state.app.error) {

        renderError(state.app.error);
        return;

    }

    renderBackground(state.weather);

    renderWeather(state.weather);

    renderCharacter(state.hikari);

}