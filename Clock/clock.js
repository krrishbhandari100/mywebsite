let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

setInterval(() => {
    let time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var hrotation = (30*hours) + (minutes/2);
    var minrotation = (6*minutes)
    var secrotation = 6*seconds;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${minrotation}deg)`;
    second.style.transform=`rotate(${secrotation}deg)`;
    document.getElementById("hourstext").innerHTML = `${hours}:`;
    document.getElementById("minutestext").innerHTML = `${minutes}:`;
    document.getElementById("secondstext").innerHTML = `${seconds}`;
}, 1000);