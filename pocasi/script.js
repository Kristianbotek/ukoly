var cities = [
  { name: "Praha", temperature: 20, weather: "bouřka" },
  { name: "Žatec", temperature: 18, weather: "oblačno" },
  { name: "Mustafar", temperature: 68, weather: "vedro" },
  { name: "Žatec 2.0", temperature: -35, weather: "slunečno" }
];

function showWeather(city) {
  var weatherContainer = document.getElementById("weather-container");
  weatherContainer.innerHTML = "Město: " + city.name + "<br>";
  weatherContainer.innerHTML += "Teplota: " + city.temperature + " °C<br>";
  weatherContainer.innerHTML += "Počasí: " + city.weather;
}

function updateWeather() {
  var citySelect = document.getElementById("city-select");
  var selectedCity = cities[citySelect.selectedIndex - 1];
  if (selectedCity) {
    showWeather(selectedCity);
  }
}

var citySelect = document.getElementById("city-select");
for (var i = 0; i < cities.length; i++) {
  var option = document.createElement("option");
  option.text = cities[i].name;
  citySelect.add(option);
}

var updateButton = document.getElementById("update-button");
updateButton.addEventListener("click", updateWeather);