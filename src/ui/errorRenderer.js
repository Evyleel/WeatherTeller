// ======================================================
// 🌸 Weather Teller Studio
// Error Renderer
// ======================================================

import { DOM } from "./dom.js";

export function renderError(message) {

    if (!DOM.dialogue) return;

    DOM.dialogue.textContent =
        `⚠️ ${message}`;

}