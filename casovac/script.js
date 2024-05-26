function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("current-time").innerHTML = timeString;
}

setInterval(updateClock, 1000);

var timerInterval;
var timerMessage = document.getElementById("timer-message");

document.getElementById("start-timer").addEventListener("click", function () {
    var timerInput = document.getElementById("timer-input").value;
    var remainingTime = timerInput * 60; 

    timerInterval = setInterval(function () {
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerMessage.innerHTML = "Časovač skončil!";
        } else {
            var minutes = Math.floor(remainingTime / 60);
            var seconds = remainingTime % 60;

            minutes = (minutes < 10 ? "0" : "") + minutes;
            seconds = (seconds < 10 ? "0" : "") + seconds;

            timerMessage.innerHTML = minutes + ":" + seconds + " zbývá";

            remainingTime--;
        }
    }, 1000);
});

var stopwatchInterval;
var stopwatchTime = document.getElementById("stopwatch-time");

document.getElementById("start-stopwatch").addEventListener("click", function () {
    var startTime = new Date().getTime();

    stopwatchInterval = setInterval(function () {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;

        var minutes = Math.floor(elapsedTime / 60000);
        var seconds = Math.floor((elapsedTime % 60000) / 1000);

        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;

        stopwatchTime.innerHTML = minutes + ":" + seconds;
    }, 1000);
});

document.getElementById("stop-stopwatch").addEventListener("click", function () {
    clearInterval(stopwatchInterval);
});

document.getElementById("save-time").addEventListener("click", function () {
    var time = stopwatchTime.innerHTML;
    var timeItem = document.createElement("li");
    timeItem.innerHTML = time;

    document.getElementById("time-history").appendChild(timeItem);
});

document.getElementById("set-limit").addEventListener("click", function () {
    var limitInput = document.getElementById("limit-input").value;
    var limitMessage = document.getElementById("limit-message");

    limitMessage.innerHTML = "Denní limit byl nastaven na " + limitInput + " minut.";
});