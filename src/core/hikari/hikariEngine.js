// ======================================================
// 🌸 Hikari Engine
// ======================================================

export function createHikariState(weather){

    return{

        mood:weather.profile.mood,

        outfit:weather.profile.outfit,

        animation:weather.profile.animation,

        dialogue:weather.profile.dialogue,

        expression:"smile"

    };

}