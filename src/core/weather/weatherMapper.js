import { WeatherType } from "./weatherTypes.js";

export function mapWeatherCode(code){

    switch(code){

        case 0:

            return WeatherType.CLEAR;

        case 1:
        case 2:
        case 3:

            return WeatherType.CLOUDY;

        case 45:
        case 48:

            return WeatherType.FOG;

        case 61:
        case 63:
        case 65:

            return WeatherType.RAIN;

        case 71:
        case 73:
        case 75:

            return WeatherType.SNOW;

        case 95:
        case 96:
        case 99:

            return WeatherType.THUNDER;

        default:

            return WeatherType.CLOUDY;

    }

}