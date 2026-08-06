// ======================================================
// 🌸 Weather Teller Studio
// Character Renderer
// ======================================================

import { DOM } from "./dom.js";

export function renderCharacter(hikari) {

    if (!hikari) return;

    DOM.dialogue.textContent =
        hikari.dialogue ?? "";

}