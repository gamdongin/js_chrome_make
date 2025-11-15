const clock = document.querySelector("h2#clock");
let date = new Date();
let second = 0;
let minute = 0;
let hour = 0;
let viewTime = `${hour} : ${minute} : ${second}`;

function sayHello(){
    let date = new Date();
    second = date.getSeconds();
    minute = date.getMinutes();
    hour = date.getHours();
    viewTime = `${hour} : ${minute} : ${second}`;
    clock.innerText = viewTime;
}
setInterval(sayHello, 1000);
