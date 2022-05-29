/* Clock */
const hourHand = document.querySelector('.clock__hand--hour');
const minuteHand = document.querySelector('.clock__hand--minute');
const secondsHand = document.querySelector('.clock__hand--second');


const setRotation = (element, rotationPercentage) => {

    element.style.setProperty('--rotation', rotationPercentage * 360);
}


const setClock = () => {
    const currentDate = new Date()

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = currentDate.getMinutes() / 60;
    const hoursRatio = currentDate.getHours() / 12;

    setRotation(secondsHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
};


/*Stopwatch*/
let [hour, minutes, seconds, miliseconds] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

// Begin the stopwatch
document.getElementById('startTimer').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTime, 10)
});

// Times stop
document.getElementById('stopTimer').addEventListener('click', () => {
    clearInterval(int);
});

// Reset the timer
document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(int);
    [hour, minutes, seconds, miliseconds] = [0, 0, 0, 0];
    timerRef.innerHTML = '00:00:00:000';
});


const displayTime = () => {
    miliseconds += 10;

    if (miliseconds == 1000) {
        miliseconds = 0;
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;
                hour++;
            }
        }
    }

    let h = hour < 10 ? '0' + hour : hour;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = miliseconds <= 9 ? '00' + miliseconds : miliseconds < 100 ? '0' + miliseconds : miliseconds;

    timerRef.innerHTML = `${h}:${m}:${s}:${ms}`;


}
/* Set the function to run stopwatch */




/* Set Functions */
setClock();

setInterval(setClock, 1000);