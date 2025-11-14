const formLogin = document.querySelector("#form-login");
const inputLogin = formLogin.querySelector("input");
const buttonLogin = formLogin.querySelector("button");

const hiddenH1 = document.querySelector("#greeting");
const HIDDEN_VISI = "hiddenVisi";
const HIDDEN_DISP = "hiddenDisp";
// 문자열만 저장하는 변수는 대문자와 _ 로 작성하는 관습이있다.

function consolView(event){
    event.preventDefault();
    const userName = inputLogin.value;
    formLogin.classList.add(HIDDEN_VISI);
    hiddenH1.innerText = `Hi ${userName}`;
    // ``는 파이썬의 f"" 와 비슷함  // f" {var}" // ` ${var}`
    hiddenH1.classList.remove(HIDDEN_DISP);
}

formLogin.addEventListener("submit", consolView);
