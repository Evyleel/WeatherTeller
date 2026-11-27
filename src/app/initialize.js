// ======================================================
// 🌸 Weather Teller Studio
// App Initialization
// ======================================================

import { startApp } from "./app.js";
import { startScheduler } from "./scheduler.js";
import { initializeWeather } from "../controllers/weatherController.js";
import { CONFIG } from "../constant/config.js";

let appStarted = false;
let refreshTimer = null;

export async function initializeApp() {
    if (!appStarted) {
        startApp();
        appStarted = true;
    }

    await initializeWeather();

    if (refreshTimer === null) {
        refreshTimer = startScheduler(
            () => initializeWeather(),
            CONFIG.WEATHER_REFRESH_MINUTES
        );
    }
}
