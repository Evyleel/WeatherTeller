// ======================================================
// 🌸 Weather Teller Studio
// Deep Merge Helper
// ======================================================

export function deepMerge(target, source) {

    const output = structuredClone(target);

    for (const key in source) {

        if (

            source[key] instanceof Object &&

            !Array.isArray(source[key])

        ) {

            output[key] = deepMerge(

                output[key] ?? {},

                source[key]

            );

        }

        else {

            output[key] = source[key];

        }

    }

    return output;

}

// ======================================================
// 🌤 Weather Icon Helper
// ======================================================

export function weatherIcon(type) {

    switch (type?.toLowerCase()) {

        case "clear":
            return "☀️";

        case "cloudy":
            return "☁️";

        case "rain":
            return "🌧️";

        case "storm":
            return "⛈️";

        case "snow":
            return "❄️";

        case "fog":
            return "🌫️";

        default:
            return "🌤️";

    }

}