const apiKey = "c828bece46c9a82fad997ccd2ec60322";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=nagpur";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  document.querySelector(".visibility").innerHTML =
    data.visibility / 1000 + " Km";
  document.querySelector(".feels").innerHTML = data.main.feels_like + "°C";
}
checkWeather();
