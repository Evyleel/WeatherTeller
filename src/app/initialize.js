import { initializeWeather } from "../controllers/weatherController.js";

export async function initializeApp() {

    await initializeWeather();

}