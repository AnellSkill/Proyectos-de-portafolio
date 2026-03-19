let timerSeconds = 0;
let timerInterval;
let timerRunning = false;

function startTimer(){

    if(timerRunning) return;

    let hrs = parseInt(document.getElementById("dhrs").value) || 0; 
    let min = parseInt(document.getElementById("dmin").value) || 0; 
    let sec = parseInt(document.getElementById("dsec").value) || 0;

    timerSeconds = hrs * 3600 + min * 60 + sec;

    timerRunning = true

    timerInterval = setInterval(() => {

    let hours = Math.floor(timerSeconds / 3600);
    let minutes = Math.floor((timerSeconds % 3600) / 60);
    let seconds = timerSeconds % 60;

    document.getElementById("dhrs").value = (hours < 10 ? '0' : '') + hours;
    document.getElementById("dmin").value = (minutes < 10 ? '0' : '') + minutes;
    document.getElementById("dsec").value = (seconds < 10 ? '0' : '') + seconds;

    

    if(timerSeconds <= 0) {
        clearInterval(timerInterval)
        timerRunning = false;
        alert("Tiempo Terminado")
        return
    }

    if(hrs > 23){
        hrs = 23
    }

    timerSeconds--;
    
},1000)
}

function stopTimer(){
    clearInterval(timerInterval);
    timerRunning = false
}

function resetTimer(){

    clearInterval(timerInterval);

    timerRunning = false
    timerSeconds = 0
    
    document.getElementById('dhrs').value = "00";
    document.getElementById('dmin').value = "00";
    document.getElementById('dsec').value = "00";
}

function addHour(){
    document.getElementById("dhrs").value++;
    let hrsInput = document.getElementById("dhrs");
    let hrs = parseInt(hrsInput.value) || 0;

    if(hrs > 23) hrs = 23;
    hrsInput.value = hrs;
}

function subHour(){
    document.getElementById("dhrs").value--;
    document.getElementById("dhrs").value++;
    let hrsInput = document.getElementById("dhrs");
    let hrs = parseInt(hrsInput.value) || 0;

    if(hrs < 0) hrs = 0;
    hrsInput.value = hrs;
}

function addMinute(){
    document.getElementById("dmin").value++;

    let minInput = document.getElementById("dmin");
    let min = parseInt(minInput.value) || 0;

    if(min > 59) min = 59;
    minInput.value = min;
}

function subMinute(){
    document.getElementById("dmin").value--;
    let minInput = document.getElementById("dmin");
    let min = parseInt(minInput.value) || 0;

    if(min < 0) min = 0;
    minInput.value = min;
}

function addSecond(){
    document.getElementById("dsec").value++;

    let secInput = document.getElementById("dsec");
    let sec = parseInt(secInput.value) || 0;

    if(sec > 59) sec = 59;
    secInput.value = sec;
}

function subSecond(){

    document.getElementById("dsec").value--;
    let secInput = document.getElementById("dsec");
    let sec = parseInt(secInput.value) || 0;

    if(sec < 0) sec = 0;
    secInput.value = sec;
}

function limitTime(){

    let hrsInput = document.getElementById("dhrs");
    let minInput = document.getElementById("dmin");
    let secInput = document.getElementById("dsec");

    let hrs = parseInt(hrsInput.value) || 0;
    let min = parseInt(minInput.value) || 0;
    let sec = parseInt(secInput.value) || 0;
    
    if(hrs > 23) hrs = 23;
    if(min > 59) min = 59;
    if(sec > 59) sec = 59;

    if(hrs < 0) hrs = 0;
    if(min < 0) min = 0;
    if(sec < 0) sec = 0;

    hrsInput.value = hrs;
    minInput.value = min;
    secInput.value = sec;
}