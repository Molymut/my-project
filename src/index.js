function displayTemperature(response) {
  let temperatureElement = document.querySelector("#currently");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = response.data.temperature.current;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cities");
  let city = searchInput.value;
  let apiKey = "d54f8f0d97od0a69b03f285btd43d9e6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;

  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

let now = new Date();
let p = document.querySelector("#time");

let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
p.innerHTML = `${day} ${hours}:${minutes}, moderate rain`;
