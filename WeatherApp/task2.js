const apiKey = "apikey";

async function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const weatherInfo = document.getElementById("weatherInfo");

  const city = cityInput.value.trim();

  if (city !== "") {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherInfo.innerHTML = `
                    <p>Temperature: ${temperature}°C</p>
                    <p>Description: ${description}</p>
                `;
      } else {
        weatherInfo.innerHTML = `<p>${data.message}</p>`;
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  } else {
    weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
  }
}
