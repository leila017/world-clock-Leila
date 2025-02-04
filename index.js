function updateTime() {
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDate = moment().format("MMMM Do YYYY");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTime = moment()
    .tz("Asia/Singapore")
    .format("HH:mm:ss [<small>]A[</small>]");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  singaporeDateElement.innerHTML = singaporeDate;
  singaporeTimeElement.innerHTML = singaporeTime;

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = moment().format("MMMM Do YYYY");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("HH:mm:ss [<small>]A[</small>]");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoDateElement.innerHTML = tokyoDate;
  tokyoTimeElement.innerHTML = tokyoTime;

  let londonElement = document.querySelector("#london");
  let londonDate = moment().format("MMMM Do YYYY");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTime = moment()
    .tz("Europe/London")
    .format("HH:mm:ss [<small>]A[</small>]");
  let londonTimeElement = londonElement.querySelector(".time");
  londonDateElement.innerHTML = londonDate;
  londonTimeElement.innerHTML = londonTime;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="citys">
    <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "HH:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
