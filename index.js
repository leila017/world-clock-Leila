function updateTime() {
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDate = moment().format("MMMM Do YYYY");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTime = moment()
    .tz("Asia/Singapore")
    .format("hh:mm:ss [<small>]A[</small>]");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  singaporeDateElement.innerHTML = singaporeDate;
  singaporeTimeElement.innerHTML = singaporeTime;

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = moment().format("MMMM Do YYYY");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoDateElement.innerHTML = tokyoDate;
  tokyoTimeElement.innerHTML = tokyoTime;
}

updateTime();
setInterval(updateTime, 1000);
