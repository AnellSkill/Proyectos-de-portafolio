let totalSeconds = 0;
let stopwatchInterval;
let counting = false;

function startStopwatch(){

    if(counting === true) return;

    counting = true

    stopwatchInterval = setInterval(() => {

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById("shrs").innerHTML = (hours < 10 ? '0' : '') + hours;
    document.getElementById("smin").innerHTML = (minutes < 10 ? '0' : '') + minutes;
    document.getElementById("ssec").innerHTML = (seconds < 10 ? '0' : '') + seconds;

    totalSeconds++;
},1000)
}

function stopStopwatch(){
    clearInterval(stopwatchInterval);
    counting = false
}

function resetStopwatch(){

    clearInterval(stopwatchInterval);

    totalSeconds = 0
    
    document.getElementById('shrs').innerHTML = "00";
    document.getElementById('smin').innerHTML = "00";
    document.getElementById('ssec').innerHTML = "00";
}