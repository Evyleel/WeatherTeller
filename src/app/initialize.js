import { startApp } from "./app.js";
import { initializeWeather } from "../controllers/weatherController.js";

export async function initializeApp() {

    startApp();

    await initializeWeather();

}