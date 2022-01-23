var timeLeft = 100;
var timeCounter = setInterval(function(){
    if (timeLeft <= 0) {
        clearInterval(timeCounter);
    }
    document.getElementById("countdown").value = 10 - timeLeft;
    timeLeft -= 1;
}, 1000);
