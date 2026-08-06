// ======================================================
// 🌸 Weather Teller Studio
// Hikari View Model
// ======================================================

export function createHikariViewModel(hikari) {

    return {

        greeting: hikari.greeting,

        mood: hikari.mood,

        dialogue: hikari.dialogue,

        outfit: hikari.outfit,

        image:
            `assets/characters/${hikari.outfit}.png`

    };

}