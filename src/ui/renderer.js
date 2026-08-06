// ======================================================
// 🌸 Weather Teller Studio
// UI Renderer
// ======================================================

import { renderBackground } from "./backgroundRenderer.js";
import { renderWeather } from "./weatherRenderer.js";
import { renderCharacter } from "./characterRenderer.js";

export function render(state){

    renderBackground(state.weather);

    renderWeather(state.weather);

    renderCharacter(state.hikari);

}