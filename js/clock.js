const clock = document.querySelector("h2#clock");
let second = 0;
let minute = 0;
let hour = 0;
let viewTime = `${hour} : ${minute} : ${second}`;

function sayHello(){
    second += 1;
    if (second === 60){
        minute += 1;
        second = 0;
        if (minute === 60){
            hour += 1;
            minute = 0;
        }
    }
    viewTime = `${hour} : ${minute} : ${second}`;
    clock.innerText = viewTime;
}

setInterval(sayHello, 1000);
// setInterval(해당 함수를, t ms 마다 실행)