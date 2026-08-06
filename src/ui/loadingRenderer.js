// ======================================================
// 🌸 Weather Teller Studio
// Loading Renderer
// ======================================================

import { DOM } from "./dom.js";

export function renderLoading() {

    if (!DOM.dialogue) return;

    DOM.dialogue.textContent =
        "🌸 Hikari is checking today's weather...";

}