// ======================================================
// 🌸 Weather Teller Studio
// Weather Controller
// ======================================================

import { getCurrentLocation } from "../services/location.js";
import { fetchWeather } from "../services/weather/provider.js";

import { createWeatherState } from "../core/weather/weatherEngine.js";
import { createHikariState } from "../core/hikari/hikariEngine.js";

import { setState } from "../core/state/stateManager.js";

export async function initializeWeather() {

    setState({

        app: {

            loading: true,

            error: null

        }

    });

    try {

        const location = await getCurrentLocation();

        const rawWeather = await fetchWeather(

            location.latitude,

            location.longitude

        );

        const weather = createWeatherState(rawWeather);

        const hikari = createHikariState(weather);

        setState({

            app: {

                initialized: true,

                loading: false,

                error: null

            },

            user: {

                latitude: location.latitude,

                longitude: location.longitude

            },

            weather,

            hikari

        });

    }

    catch (error) {

        setState({

            app: {

                initialized: false,

                loading: false,

                error: error.message

            }

        });

    }

}