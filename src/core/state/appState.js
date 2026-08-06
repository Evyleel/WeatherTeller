// ======================================================
// 🌸 Weather Teller Studio
// Application State
// ======================================================

export const AppState = {

    app: {

        initialized: false,
        loading: false,
        error: null

    },

    user: {

        city: null,
        latitude: null,
        longitude: null

    },

    weather: {

        current: null,
        forecast: [],
        profile: null

    },

    hikari: {

        mood: null,
        expression: null,
        outfit: null,
        animation: null,
        dialogue: null

    },

    settings: {

        theme: "system",
        language: "en",
        unit: "metric"

    }

};