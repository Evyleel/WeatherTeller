// ======================================================
// 🌸 Weather Teller Studio
// Weather Provider
// ======================================================

import { fetchOpenMeteoWeather } from "./openMeteo.js";

export async function fetchWeather(latitude, longitude) {

    return fetchOpenMeteoWeather(

        latitude,

        longitude

    );

}