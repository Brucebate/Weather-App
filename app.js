document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "88cc1f9285395bbd6954ea97a2839fc0";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;
  
    const searchBar = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-logo");
  
    async function checkWeather(city) {
      try {
        const response = await fetch(apiUrl + "&q=" + city); // fetch is like sending the message to open weather api
        const data = await response.json(); // .json is like getting reply from them
        console.log(data);
  
        if (data.cod === 200) { //here cod === 200 is used to check response from the api so with this we can succesfully go on.
          document.querySelector(".city").innerText = data.name;
          document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
          document.querySelector(".humidity").innerText = data.main.humidity + "%";
          document.querySelector(".wind").innerText = data.wind.speed + " m/s";
          setWeatherIcon(data.weather[0].main);
        } else {
          console.log("Error: " + data.message);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    
    function setWeatherIcon(weatherCondition) {
      switch (weatherCondition) {
        case "Clouds":
          weatherIcon.src = "images/clouds.png";
          break;
        case "Clear":
          weatherIcon.src = "images/clear.png";
          break;
        case "Haze":
          weatherIcon.src = "images/haze.png";
          break;
        case "Rain":
          weatherIcon.src = "images/rain.png";
          break;
        case "Drizzle":
          weatherIcon.src = "images/drizzle.png";
          break;
        case "Mist":
          weatherIcon.src = "images/mist.png";
          break;
        case "Snow":
          weatherIcon.src = "images/snow.png";
          break;
        default:
          weatherIcon.src = "images/unknown.png"; // Default icon for unknown conditions
      }
    }
  
    searchBtn.addEventListener("click", () => {
      checkWeather(searchBar.value);
    });
});
