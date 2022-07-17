let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
setInterval(Clock, 1000);
function Clock(){
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var day = today.getDay();
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
    document.getElementById("day").innerHTML = days[day]
}

window.onload = function() { Clock()}
