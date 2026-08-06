// ======================================================
// 🌸 Weather Teller Studio
// Background Renderer
// ======================================================

export function renderBackground(weather) {

    if (!weather?.profile) return;

    const background = weather.profile.background;

    document.documentElement.dataset.weather = background;

}