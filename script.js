const currentDay = document.querySelector('[data-testId="currentDayOfTheWeek"]');
const UTCtime = document.querySelector('[data-testId="currentUTCTime"]');
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const hours = today.getUTCHours();
const minutes = today.getUTCMinutes();
const seconds = today.getUTCSeconds();
// Set current day
currentDay.innerHTML = daysOfTheWeek[today.getDay()];
// Set current UTC time
function setTime() {
    UTCtime.innerHTML = hours + ":" + minutes + ":" + seconds ;
}

setTime();