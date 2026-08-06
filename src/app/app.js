// ======================================================
// 🌸 Weather Teller Studio
// App Bootstrap
// ======================================================

import { subscribe } from "../core/state/stateManager.js";
import { render } from "../ui/renderer.js";

export function startApp() {

    subscribe(render);

}