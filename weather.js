const apiKey = "ad6bbc535699c8bd10f23c04900f4e28"; 

function getWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const weather = data.weather[0].main;
          const temp = data.main.temp;
          document.getElementById("weather").textContent =
            `Current weather: ${weather}, ${temp}°C`;
          
          // OPTIONAL: Use this weather value to update playlist or UI
          console.log("Detected weather:", weather);
        });
    });
  } else {
    document.getElementById("weather").textContent = "Location not supported.";
  }
}

getWeather();
