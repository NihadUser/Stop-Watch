let [seconds, minutes, hours] = [0, 0, 0];
const displayTime = document.getElementById("displayTime");
const start = document.querySelector(".start");
const stopw = document.querySelector(".stop");
const reset = document.querySelector(".reset");
console.log(stopw);
let timer = null;
stopWatch = () => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = h + ":" + m + ":" + s;
};
displayWatch = () => {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
};
watchStop = () => {
  clearInterval(timer);
};
ResetWatch = () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
};
start.addEventListener("click", () => {
  displayWatch();
});
stopw.addEventListener("click", () => {
  watchStop();
});
reset.addEventListener("click", () => {
  ResetWatch();
});
