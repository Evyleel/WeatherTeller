// ======================================================
// 🌸 Weather Teller Studio
// Animation Engine
// ======================================================

export function createAnimationState(weatherType) {

    switch (weatherType) {

        case "rain":

            return {

                idle: "umbrella",

                blink: true,

                floating: true

            };

        case "clear":

            return {

                idle: "fan",

                blink: true,

                floating: true

            };

        case "cloudy":

            return {

                idle: "idle",

                blink: true,

                floating: true

            };

        default:

            return {

                idle: "idle",

                blink: true,

                floating: true

            };

    }

}