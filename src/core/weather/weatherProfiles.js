import { WeatherType } from "./weatherTypes.js";

export const WeatherProfiles = {

    [WeatherType.CLEAR]:{

        mood:"happy",

        outfit:"summer",

        animation:[
            "idle",
            "umbrella",
            "blink",
        ],

        background:"sunny",

        dialogue:[
            "rain_01",
            "rain__02",
            "rain__03",
        ],

    },

    [WeatherType.RAIN]:{

        mood:"caring",

        outfit:"raincoat",

        animation:"umbrella",

        background:"rain",

        dialogue:"rain_01"

    }

};