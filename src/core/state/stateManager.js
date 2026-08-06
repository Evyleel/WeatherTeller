// src/core/state/stateManager.js

import { AppState } from "./appState.js";
import { deepMerge } from "../../utils/helpers.js";

let state = structuredClone(AppState);

const listeners = new Set();

export function getState() {
    return state;
}

export function setState(partialState) {

    state = deepMerge(state, partialState);

    listeners.forEach(listener => listener(state));

}

export function subscribe(listener){

    listeners.add(listener);

    // Langsung kirim state pertama
    listener(state);

}

export function unsubscribe(listener){

    listeners.delete(listener);

}