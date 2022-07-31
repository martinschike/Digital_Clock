const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const ampmContainer = document.getElementById("ampm");


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if(h > 12) {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursContainer.innerText = h;
    minutesContainer.innerText = m;
    secondsContainer.innerText = s;
    ampmContainer.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000)

}

updateClock();