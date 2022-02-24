function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apikey = `5f472b7acba333cd8a035ea85a0d4d4c`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url).then(displayTemperature);
