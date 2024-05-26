function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("reservation-container").style.display = "block";
        loadReservations();
    } else {
        alert("Neplatné přihlašovací údaje");
    }
}

function createReservation() {
    var time = document.getElementById("time").value;
    var guests = document.getElementById("guests").value;
    var reservation = {
        time: time,
        guests: guests
    };

    var reservations = JSON.parse(localStorage.getItem("reservations")) || [];
    reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(reservations));

    loadReservations();
}

function loadReservations() {
    var reservations = JSON.parse(localStorage.getItem("reservations")) || [];

    var calendar = document.getElementById("calendar");
    calendar.innerHTML = "";

    for (var i = 0; i < reservations.length; i++) {
        var reservation = reservations[i];
        var day = document.createElement("div");
        day.className = "calendar-day";
        day.innerHTML = "Čas: " + reservation.time + "<br>Počet osob: " + reservation.guests;
        calendar.appendChild(day);
    }
}