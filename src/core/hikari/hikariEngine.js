// ======================================================
// 🌸 Weather Teller Studio
// Hikari Engine
// ======================================================

export function createHikariState(weather) {

    const { profile } = weather;

    return {

        mood: profile.mood,

        outfit: profile.outfit,

        animation: profile.animation,

        expression: profile.expression,

        dialogue: getRandomDialogue(profile.dialogues)

    };

}

function getRandomDialogue(dialogues) {

    if (!dialogues || dialogues.length === 0) {

        return "";

    }

    const index = Math.floor(Math.random() * dialogues.length);

    return dialogues[index];

}