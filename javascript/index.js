function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTime = moment().tz("Africa/Johannesburg");

    johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date");
    let moscowTimeElement = moscowElement.querySelector(".time");
    let moscowTime = moment().tz("Europe/Moscow");

    moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
    moscowTimeElement.innerHTML = moscowTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

let cityUpdateInterval;

function updateCity(event) {
  clearInterval(cityUpdateInterval);

  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");

  function updateSelectedCityTime() {
    let cityTime = moment().tz(cityTimeZone);
    citiesElement.innerHTML = `<div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
          </div>
          <a href="/">All cities</a>`;
  }

  updateSelectedCityTime();
  cityUpdateInterval = setInterval(updateSelectedCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
