// ======================================================
// 🌸 Weather Teller Studio
// Hikari Engine
// ======================================================

const FALLBACK_PROFILE = {
    mood: "calm",
    expression: "normal",
    outfit: "casual",
    dialogues: []
};

export function createHikariState(weather) {

    const profile = weather?.profile ?? FALLBACK_PROFILE;

    return {

        greeting: getGreeting(),

        mood: profile.mood ?? FALLBACK_PROFILE.mood,

        expression: profile.expression ?? FALLBACK_PROFILE.expression,

        outfit: profile.outfit ?? FALLBACK_PROFILE.outfit,

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
