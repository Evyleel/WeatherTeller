const view = createWeatherViewModel(weather);

DOM.temperature.textContent = view.temperature;

DOM.humidity.textContent = view.humidity;

DOM.wind.textContent = view.wind;