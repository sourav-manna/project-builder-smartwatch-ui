setInterval(Clock, 1000);
function Clock(){
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    if(hr<10){
        hr = "0"+hr
    }
    if(min<10){
        min = "0"+min
    }
    var time = hr + ":" +min;
    console.log(time)
    document.getElementById("time1").innerHTML = time
    document.getElementById("time2").innerHTML = time
}

window.onload = function() { Clock()}
