let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

setInterval(() => {
    
    let time = new Date();
    let hourtime = time.getHours();
    let mintime = time.getMinutes();
    let secondtime = time.getSeconds();
    
    if (hourtime > 12) {
        hourtime = hourtime - 12
    }
    // console.log("Setinterval")
    hour.style.transform = `rotate(${(30 * hourtime) + (mintime/2) + (secondtime/120)}deg)`;
    minute.style.transform = `rotate(${(6 * mintime)}deg)`;
    second.style.transform = `rotate(${6 * secondtime}deg)`;
}, 1000)