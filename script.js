// ======================================================
// 🌸 Weather Teller Studio
// Entry Point
// ======================================================

import { initializeApp } from "./src/app/initialize.js";

window.addEventListener("DOMContentLoaded", async () => {

    try {

        await initializeApp();

        console.log("🌸 Weather Teller started.");

    }

    catch (error) {

        console.error("Failed to initialize app:", error);

    }

});