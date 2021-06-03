const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const month = document.getElementById('month');
const day = document.getElementById('day');
const weekday = document.getElementById('weekday');
const year = document.getElementById('year');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const main = document.getElementById('main');
const author = document.getElementById('author');
const repo = document.getElementById('repo');

updateClock();
setInterval(updateClock, 1000);

updateTime();
setInterval(updateTime, 1000);

function updateClock(){
    let date = new Date();
    hours.innerHTML = zeroBefore(date.getHours());
    minutes.innerHTML = zeroBefore(date.getMinutes());
    seconds.innerHTML = zeroBefore(date.getSeconds());
}

function updateTime(){
    let date = new Date();
    month.innerHTML = monthName(date.getMonth());
    day.innerHTML = dateSuffix(date.getDate());
    weekday.innerHTML = weekDay(date.getDay());
    year.innerHTML = date.getFullYear();
}

function zeroBefore(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function weekDay(i){
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return weekdays[i-1];
}

function monthName(i){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktoober", "November", "December"];
    return months[i];
}

function dateSuffix(i){
    var suffixes = ["st", "nd", "rd", "th"];
    var j = i % 10,
    k = i % 100;
    if (j == 1 && k != 11) {
        return i + suffixes[0] + " of ";
    }
    if (j == 2 && k != 12) {
        return i + suffixes[1] + " of ";
    }
    if (j == 3 && k != 13) {
        return i + suffixes[2] + " of ";
    }
    else {
        return i + suffixes[3] + " of ";
    }
}

button1.addEventListener('click', changeBackground);

function changeBackground() {
    const currentBackground = main.style.backgroundImage;
    if (currentBackground == 'url("spring2.jpg")'){
        var url = 'url("spring1.jpg")';
        main.style.backgroundImage = url;
        author.style.color = 'white';
        repo.style.color = 'white';
    }
    else {
        var url = 'url("spring2.jpg")'
        main.style.backgroundImage = url;
        author.style.color = 'black';
        repo.style.color = 'black';
    }
}

button2.addEventListener('click', changeWeekdayColor);

function changeWeekdayColor() {
    const currentColor = weekday.style.backgroundColor;
    if (currentColor == 'white'){
        weekday.style.backgroundColor = '#f5e79f';
    }
    else {
        weekday.style.backgroundColor = 'white';
    }
}
