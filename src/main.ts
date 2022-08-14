import "./style.css";

const week = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const hours = document.querySelector("#hours") as HTMLDivElement;
const minutes = document.querySelector("#minutes") as HTMLDivElement;
const seconds = document.querySelector("#seconds") as HTMLDivElement;

const day = document.querySelector("#day") as HTMLDivElement;

const hoursDigital = document.querySelector("#hour-time") as HTMLSpanElement;
const minutesDigital = document.querySelector(
  "#minute-time"
) as HTMLSpanElement;
const secondsDigital = document.querySelector(
  "#second-time"
) as HTMLSpanElement;

const getTime = () => {
  const now = new Date();
  const timeInterval = 6;
  const timeSeconds = now.getSeconds();
  const timeMinutes = now.getMinutes();
  const timeHours = now.getHours();
  hoursDigital.innerHTML = `${timeHours}`;
  minutesDigital.innerHTML = `${timeMinutes}`;
  secondsDigital.innerHTML = `${timeSeconds}`;
  seconds.style.transform = `rotate(${timeSeconds * timeInterval}deg)`;
  minutes.style.transform = `rotate(${
    timeMinutes * timeInterval + timeSeconds / 10
  }deg)`;
  hours.style.transform = `rotate(${timeHours * 12 + timeMinutes / 2}deg)`;
  day.innerText = week[now.getDay()];
};

setInterval(getTime, 100);
