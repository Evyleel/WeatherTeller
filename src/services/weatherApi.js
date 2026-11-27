// ======================================================
// 🌸 Weather Teller Studio
// Weather API
// ======================================================

import { CONFIG } from "../constant/config.js";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";
const CACHE_PREFIX = "weather-teller:weather:";
const CACHE_DURATION = CONFIG.CACHE_DURATION;

function getCacheKey(latitude, longitude) {
    return `${CACHE_PREFIX}${latitude.toFixed(4)}:${longitude.toFixed(4)}`;
}

function readCache(key) {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : null;
    } catch {
        return null;
    }
}

function writeCache(key, entry) {
    try {
        localStorage.setItem(key, JSON.stringify(entry));
    } catch {
        // Weather fetching should still work when storage is unavailable.
    }
}

function isValidWeather(data) {
    return data &&
        Number.isFinite(data.weatherCode) &&
        Number.isFinite(data.temperature) &&
        Number.isFinite(data.humidity) &&
        Number.isFinite(data.windSpeed) &&
        Number.isFinite(data.pressure);
}

export async function fetchWeather(latitude, longitude) {
    const lat = Number(latitude);
    const lon = Number(longitude);

    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
        throw new TypeError("Valid latitude and longitude are required.");
    }

    const cacheKey = getCacheKey(lat, lon);
    const cached = readCache(cacheKey);
    const now = Date.now();

    if (
        cached &&
        isValidWeather(cached.data) &&
        Number.isFinite(cached.savedAt) &&
        now - cached.savedAt < CACHE_DURATION
    ) {
        return cached.data;
    }

    const params = new URLSearchParams({
        latitude: String(lat),
        longitude: String(lon),
        current: [
            "temperature_2m",
            "relative_humidity_2m",
            "weather_code",
            "wind_speed_10m",
            "surface_pressure"
        ].join(",")
    });

    try {
        const response = await fetch(`${BASE_URL}?${params}`);

        if (!response.ok) {
            throw new Error(`Weather request failed (HTTP ${response.status}).`);
        }

        const json = await response.json();
        const current = json?.current;

        const weather = {
            weatherCode: current?.weather_code,
            temperature: current?.temperature_2m,
            humidity: current?.relative_humidity_2m,
            windSpeed: current?.wind_speed_10m,
            pressure: current?.surface_pressure
        };

        if (!isValidWeather(weather)) {
            throw new Error("Weather API returned incomplete or invalid data.");
        }

        writeCache(cacheKey, {
            savedAt: now,
            data: weather
        });

        return weather;
    } catch (error) {
        // Use expired data only as an offline fallback for the same coordinates.
        if (cached && isValidWeather(cached.data)) {
            console.warn("Using cached weather because the request failed.", error);
            return cached.data;
        }

        throw error;
    }
}
