const currentDay = document.getElementById("day");
const UTCtime = document.getElementById("time");
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const hours = today.getUTCHours();
const minutes = today.getUTCMinutes();
const seconds = today.getUTCSeconds();


currentDay.innerHTML = daysOfTheWeek[today.getDay()];

function changeTime() {
    UTCtime.innerHTML = hours + ":" + minutes + ":" + seconds ;
}

setTimeout(changeTime, 1000);

function adjustTime(digit) {
    if(digit < 10) {
        digit = "0" + digit;
    }
}