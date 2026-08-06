// ======================================================
// 🌸 Weather Teller Studio
// Background Renderer
// ======================================================

export function renderBackground(weather) {

    if (!weather?.profile) return;

    document.body.dataset.weather =
        weather.profile.background;

}