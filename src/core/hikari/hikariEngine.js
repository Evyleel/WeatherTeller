// ======================================================
// 🌸 Weather Teller Studio
// Hikari Engine
// ======================================================

export function createHikariState(weather) {

    const profile = weather.profile;

    return {

        greeting: getGreeting(),

        mood: profile.mood,

        expression: profile.expression,

        outfit: profile.outfit,

        dialogue: randomDialogue(profile.dialogues)

    };

}

function randomDialogue(dialogues = []) {

    if (!Array.isArray(dialogues) || dialogues.length === 0) {

        return "";

    }

    const index = Math.floor(Math.random() * dialogues.length);

    return dialogues[index];

}

function getGreeting() {

    const hour = new Date().getHours();

    if (hour < 5) return "Good Night 🌙";

    if (hour < 11) return "Good Morning ☀️";

    if (hour < 15) return "Good Afternoon 🌤️";

    if (hour < 18) return "Good Evening 🌆";

    return "Good Night 🌙";

}