const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const message = document.getElementById("message");
function toCelsius(value, unit) {
    if (unit === "fahrenheit") {
        return (value - 32) * 5 / 9;
    }
    if (unit === "kelvin") {
        return value - 273.15;
    }
    return value;
}
function fromCelsius(value, unit) {
    if (unit === "fahrenheit") {
        return (value * 9 / 5) + 32;
    }
    if (unit === "kelvin") {
        return value + 273.15;
    }
    return value;
}
function convertTemperature() {
    const value = Number(temperatureInput.value);
    const enteredValue = temperatureInput.value.trim();
    const sourceUnit = fromUnit.value;
    const targetUnit = toUnit.value;
    if (enteredValue === "" || !Number.isFinite(value)) {
        result.textContent = "--";
        message.textContent = "Please enter a valid temperature.";
        return;
    }
    if (
        (sourceUnit === "kelvin" && value < 0) ||
        (sourceUnit === "celsius" && value < -273.15) ||
        (sourceUnit === "fahrenheit" && value < -459.67)
    ) {
        result.textContent = "--";
        message.textContent = "That temperature is below absolute zero.";
        return;
    }
    const celsiusValue = toCelsius(value, sourceUnit);
    const convertedValue = fromCelsius(celsiusValue, targetUnit);
    const symbols = {
        celsius: "°C",
        fahrenheit: "°F",
        kelvin: "K"
    };
    result.textContent =
        `${convertedValue.toFixed(2)} ${symbols[targetUnit]}`;
    message.textContent =
        `${value} ${symbols[sourceUnit]} converted to ${targetUnit}.`;
}
convertBtn.addEventListener("click", convertTemperature);
temperatureInput.addEventListener("input", convertTemperature);
fromUnit.addEventListener("change", convertTemperature);
toUnit.addEventListener("change", convertTemperature);