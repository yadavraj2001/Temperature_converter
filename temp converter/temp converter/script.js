document.getElementById("celsiusToFahrenheit").addEventListener("click", function () {
    const celsiusInput = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("resultCF").textContent = `${celsiusInput.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
});

document.getElementById("fahrenheitToCelsius").addEventListener("click", function () {
    const fahrenheitInput = parseFloat(document.getElementById("fahrenheit").value);
    const celsius = (fahrenheitInput - 32) * 5/9;
    document.getElementById("resultFC").textContent = `${fahrenheitInput.toFixed(2)}°F is ${celsius.toFixed(2)}°C`;
});
