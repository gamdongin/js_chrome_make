const clock = document.querySelector("h2#clock");
function sayHello(){
    clock.innerText = "time out";
}
setTimeout(sayHello, 2000);
// setInterval(해당 함수를, t ms 후 한번 실행)