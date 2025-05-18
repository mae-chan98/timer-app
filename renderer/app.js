let timerDuration = 25 * 60;
let timeLeft = timerDuration;
let timerInterval = null;

const timerDisplay = document.getElementById("timer");
const customInput = document.getElementById("custom-minutes");
const setTimerBtn = document.getElementById("set-timer");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up! Report your progress please.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = timerDuration;
  updateDisplay();
}

function setCustomTime() {
  pauseTimer();
  const minutes = parseInt(customInput.value);
  if (!isNaN(minutes) && minutes > 0) {
    timerDuration = minutes * 60;
    timeLeft = timerDuration;
    updateDisplay();
  }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
setTimerBtn.addEventListener("click", setCustomTime);

updateDisplay();
