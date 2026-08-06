// ======================================================
// 🌸 Weather Teller Studio
// UI Renderer
// ======================================================

import { renderWeather } from "./weatherRenderer.js";
import { renderCharacter } from "./characterRenderer.js";

export function render(state){

    if(!state) return;

    renderWeather(state.weather);

    renderCharacter(state.hikari);

}