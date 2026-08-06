// ======================================================
// 🌸 Weather Teller Studio
// Weather Controller
// ======================================================

import { getCurrentLocation } from "../services/location.js";
import { fetchWeather } from "../services/weatherApi.js";

import { createWeatherState } from "../core/weather/weatherEngine.js";
import { createHikariState } from "../core/hikari/hikariEngine.js";

import { setState } from "../core/state/stateManager.js";

export async function initializeWeather() {

    const location = await getCurrentLocation();

    const rawWeather = await fetchWeather(

        location.latitude,

        location.longitude

    );

    const weather = createWeatherState(rawWeather);

    const hikari = createHikariState(weather);

    setState({

        user:{

            latitude:location.latitude,

            longitude:location.longitude

        },

        weather,

        hikari

    });

}