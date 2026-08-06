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

    try {

        // Get user location
        const location = await getCurrentLocation();

        // Fetch raw weather
        const rawWeather = await fetchWeather(
            location.latitude,
            location.longitude
        );

        // Normalize weather
        const weather = createWeatherState(rawWeather);

        // Generate Hikari state
        const hikari = createHikariState(weather);

        // Save to AppState
        setState({

            user: {

                latitude: location.latitude,

                longitude: location.longitude

            },

            weather,

            hikari,

            app: {

                initialized: true,

                loading: false,

                error: null

            }

        });

    } catch (error) {

        console.error(error);

        setState({

            app: {

                initialized: false,

                loading: false,

                error: error.message

            }

        });

    }

}