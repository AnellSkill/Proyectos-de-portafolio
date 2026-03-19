let hours = document.getElementsByClassName("hrs")[0];
let min = document.getElementsByClassName("min")[0];
let sec = document.getElementsByClassName("sec")[0];
let timeDif = document.getElementById("timeDif");

setInterval(()=>{

    let currentTime = new Date

    let hrs = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hrs >= 12){
        timeDif.textContent = "PM"
    }else{
        timeDif.textContent = "AM"
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }else if (hrs === 0){
        hrs = 12;
    }

    hours.innerHTML = (hrs < 10 ? "0" : "") + hrs;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
},1000);