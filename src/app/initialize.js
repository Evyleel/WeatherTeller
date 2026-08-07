import { startApp } from "./app.js";
import { startScheduler } from "./scheduler.js";
import { initializeWeather } from "../controllers/weatherController.js";

export async function initializeApp() {

    startApp();

    await initializeWeather();

    startScheduler(async () => {

        console.log("🌤 Refresh weather...");

        await initializeWeather();

    }, 10);

    startScheduler(refreshWeather, CONFIG.WEATHER_REFRESH_MINUTES);

}