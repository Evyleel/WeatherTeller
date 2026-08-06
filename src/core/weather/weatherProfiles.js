// ======================================================
// 🌸 Weather Teller Studio
// Weather Profiles
// ======================================================

import { WeatherType } from "./weatherTypes.js";

export const WeatherProfiles = {

    [WeatherType.CLEAR]: {

        mood: "happy",

        expression: "smile",

        outfit: "summer",

        background: "sunny",

        dialogues: [

            "Beautiful weather today! ☀️",

            "Let's go outside!",

            "Perfect day for photography!"

        ]

    },

    [WeatherType.CLOUDY]: {

        mood: "calm",

        expression: "normal",

        outfit: "casual",

        background: "cloudy",

        dialogues: [

            "Cloudy days are relaxing.",

            "Perfect weather for coffee.",

            "Take it easy today."

        ]

    },

    [WeatherType.RAIN]: {

        mood: "caring",

        expression: "happy",

        outfit: "raincoat",

        background: "rain",

        dialogues: [

            "Don't forget your umbrella! ☔",

            "Stay warm today!",

            "Looks like rain all day."

        ]

    }

};