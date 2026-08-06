// ======================================================
// 🌸 Weather Teller Studio By S a n h i t y `
// Weather Engine
// ======================================================

import { mapWeatherCode } from "./weatherMapper.js";
import { WeatherProfiles } from "./weatherProfiles.js";

export function createWeatherState(rawWeather){

    const type = mapWeatherCode(rawWeather.weatherCode);

    const profile = WeatherProfiles[type];

    return{

        current:{

            type,

            temperature:rawWeather.temperature,

            humidity:rawWeather.humidity,

            windSpeed:rawWeather.windSpeed,

            pressure:rawWeather.pressure,

            uvIndex:rawWeather.uvIndex

        },

        profile

    };

}