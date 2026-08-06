// ======================================================
// 🌸 Weather Teller Studio
// App Entry Point
// ======================================================

import { subscribe } from "../core/state/stateManager.js";
import { render } from "../ui/renderer.js";
import { initializeApp } from "./initialize.js";

document.addEventListener("DOMContentLoaded", async () => {

    subscribe(render);

    await initializeApp();

});