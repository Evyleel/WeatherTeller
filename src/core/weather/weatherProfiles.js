// ======================================================
// 🌸 Weather Teller Studio
// Weather Profiles
// ======================================================

import { WeatherType } from "./weatherTypes.js";

export const WeatherProfiles = Object.freeze({

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
    },

    [WeatherType.FOG]: {
        mood: "calm",
        expression: "normal",
        outfit: "casual",
        background: "fog",
        dialogues: [
            "It's a little misty outside.",
            "Take care when traveling in the fog.",
            "The world looks so quiet today."
        ]
    },

    [WeatherType.SNOW]: {
        mood: "happy",
        expression: "smile",
        outfit: "casual",
        background: "snow",
        dialogues: [
            "It's a chilly day. Stay warm! ❄️",
            "The snow makes everything look magical.",
            "Don't forget to bundle up!"
        ]
    },

    [WeatherType.THUNDER]: {
        mood: "caring",
        expression: "concerned",
        outfit: "raincoat",
        background: "thunder",
        dialogues: [
            "There's a storm outside. Please stay safe.",
            "Avoid open areas during thunderstorms.",
            "Let's wait somewhere safe until it passes."
        ]
    },

    [WeatherType.WINDY]: {
        mood: "calm",
        expression: "smile",
        outfit: "casual",
        background: "windy",
        dialogues: [
            "It's quite breezy today.",
            "Hold on to your hat!",
            "A little fresh air can be nice."
        ]
    },

    [WeatherType.NIGHT]: {
        mood: "calm",
        expression: "normal",
        outfit: "casual",
        background: "night",
        dialogues: [
            "It's getting late. Have a restful night.",
            "Take a moment to enjoy the quiet.",
            "Good night. See you tomorrow!"
        ]
    }

});
