export const AppState = {

    app: {

        initialized: false,

        loading:true,

        error:null,

        version: "0.1.0"

    },

    user: {

        city: null,

        latitude: null,

        longitude: null,

        timezone:null,

        theme: "light"

    },

    weather: {

        current:{},

        hourly:[],

        daily:[],

        lastUpdated:null,

        type: null,

        temperature: null,

        humidity: null,

        pressure: null,

        windSpeed: null,

        uvIndex: null,

        forecast: []

    },

    hikari:{

    mood:"happy",

    expression:"smile",

    outfit:"default",

    animation:"idle",

    dialogue:"",

    affection:0,

    streak:0

},

    background: {

        theme: "day"

    },

    settings:{

    temperatureUnit:"celsius",

    language:"en",

    theme:"light",

    animation:true

}

};