const btnSearch = document.getElementById("btnsearch");
const cityInput = document.getElementById("cityinput");
const container = document.getElementById("container");

btnSearch.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const apiKey = "cf73d38d029b5b594a52f8399a2f992f";
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      container.innerHTML = `<p style="color:red;">City not found!</p>`;
      return;
    }

    displayWeather(data);
  } catch (error) {
    container.innerHTML = `<p style="color:red;">Error fetching weather data.</p>`;
    console.error(error);
  }
});

function displayWeather(data) {
  const { name, sys, main, weather, wind, visibility } = data;

  container.innerHTML = `
    <div class="weather-box">
      <h2> <i class="bi bi-geo-fill" style="color:red;"></i> ${name}, ${sys.country}</h2>
      <div class="condition"><i class="bi bi-clouds-fill" style="margin-right:10px; color:#b8b5b5"></i>${weather[0].description}</div>
      <div class="temp">${main.temp}°C</div>
      <div class="feels-like">Feels like ${main.feels_like}°C</div>

      <div class="details">
        <div class="card c1">
          <p>  <i class="bi bi-droplet-fill" style="font-size:30px; color: skyblue"></i> Humidity</p>
          <p>${main.humidity}%</p>
        </div>
        <div class="card c2">
          <p style="font-size:20px;"><i class="bi bi-cloud-fog2-fill" style="font-size:27px; color: #b8b5b5; margin-right:2px;"></i>Wind Speed</p>
          <p>${wind.speed} m/s</p>
        </div>
        <div class="card c3">
          <p><i class="bi bi-thermometer-half" style="font-size:30px; color:red;"></i>Pressure</p>
          <p>${main.pressure} hPa</p>
        </div>
        <div class="card c4">
          <p><i class="bi bi-eye-fill" style="color:rgb(236, 199, 199); font-size:30px;margin-right:3px;"></i>Visibility</p>
          <p>${visibility / 1000} km</p>
        </div>
      </div>

      <div class="footer">Weather condition: ${weather[0].main}</div>
    </div>
  `;
}
