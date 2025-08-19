setInterval(() => {
  let now = new Date();

  let _hours = String(now.getHours()).padStart(2, "0");
  let _minute = String(now.getMinutes()).padStart(2, "0");
  let _second = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hours").innerText = _hours;
  document.getElementById("minutes").innerText = _minute;
  document.getElementById("second").innerText = _second;
}, 1000);
setInterval(() => {
  let now = new Date();

  let _hoursF = String(now.getHours()).padStart(2, "0");
  let _minuteF = String(now.getMinutes()).padStart(2, "0");
  let _secondF = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hoursF").innerText = _hoursF;
  document.getElementById("minutesF").innerText = _minuteF;
  document.getElementById("secondF").innerText = _secondF;
}, 1000);
