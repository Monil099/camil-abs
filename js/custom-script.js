function updateCustomCountdown() {
    // Set target date for March 22, 2025 at 11:00 PM PST (Pacific Standard Time, UTC-8)
    const eventDate = new Date("March 22, 2025 23:00:00 GMT-0800").getTime();
    const now = new Date().getTime();
    const timeDiff = eventDate - now;

    if (timeDiff <= 0) {
        document.querySelector(".custom-countdown-timer").innerHTML = "Event Started!";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("custom-days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("custom-hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("custom-minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("custom-seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(updateCustomCountdown, 1000);
updateCustomCountdown();
