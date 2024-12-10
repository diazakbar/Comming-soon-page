const day = document.querySelector(".day .numb");
const hour = document.querySelector(".hour .numb");
const min = document.querySelector(".min .numb");
const sec = document.querySelector(".sec .numb");

// Set launch date (e.g. Dec 31, 2024 00:00:00)
const launchDate = new Date("Dec 31, 2024 00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    day.textContent = days < 10 ? "0" + days : days;
    hour.textContent = hours < 10 ? "0" + hours : hours;
    min.textContent = minutes < 10 ? "0" + minutes : minutes;
    sec.textContent = seconds < 10 ? "0" + seconds : seconds;

    // Stop the countdown when the date is reached
    if (timeLeft < 0) {
        clearInterval(timer);
        document.querySelector('.wrapper').innerHTML = "<h1>We're Live!</h1>";
    }
}

// Update the timer every second
const timer = setInterval(updateTimer, 1000);