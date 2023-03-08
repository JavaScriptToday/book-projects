const timerDisplay = document.querySelector(".time-left");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const progressBar = document.querySelector(".progress-bar");

let countdown;
let timeLeft;
let isPaused = true;
let workTime = 25 * 60;
let breakTime = 5 * 60;

function startTimer() {
  if (isPaused) {
    isPaused = false;
    const endTime = Date.now() + timeLeft * 1000;
    countdown = setInterval(() => {
      timeLeft = Math.round((endTime - Date.now()) / 1000);
      displayTimeLeft(timeLeft);
      updateProgressBar(timeLeft);
      if (timeLeft < 0) {
        clearInterval(countdown);
        isPaused = true;
        if (timerDisplay.textContent === "Work Time!") {
          timeLeft = breakTime;
          timerDisplay.textContent = "Break Time!";
        } else {
          timeLeft = workTime;
          timerDisplay.textContent = "Work Time!";
        }
        setTimeout(() => startTimer(), 1000);
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(countdown);
  isPaused = true;
}

function resetTimer() {
  stopTimer();
  timeLeft = workTime;
  displayTimeLeft(timeLeft);
  updateProgressBar(timeLeft);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function updateProgressBar(seconds) {
  const percent =
    (1 -
      seconds /
        (timerDisplay.textContent.includes("Work") ? workTime : breakTime)) *
    100;
  progressBar.style.width = `${percent}%`;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

displayTimeLeft(workTime);
timeLeft = workTime;
