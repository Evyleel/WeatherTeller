// ======================================================
// 🌸 Weather Teller Studio
// Character Renderer
// ======================================================

import { DOM } from "./dom.js";
import { createHikariViewModel } from "../core/viewmodels/hikariViewModel.js";

export function renderCharacter(hikari) {

    if (!hikari) return;

    const view = createHikariViewModel(hikari);

    if (DOM.character) {

        DOM.character.src = view.image;

    }

    if (DOM.dialogue) {

        DOM.dialogue.textContent = view.dialogue;

    }

    if (DOM.greeting) {

        DOM.greeting.textContent = view.greeting;

    }

    if (DOM.mood) {

        DOM.mood.textContent = `😊 ${view.mood}`;

    }

    if (DOM.outfit) {

        DOM.outfit.textContent = `👕 ${view.outfit}`;

    }

}