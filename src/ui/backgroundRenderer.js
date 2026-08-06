// ======================================================
// 🌸 Weather Teller Studio
// Background Renderer
// ======================================================

export function renderBackground(weather) {

    if (!weather?.profile) return;

    document.documentElement.dataset.weather =
        weather.profile.background;

}