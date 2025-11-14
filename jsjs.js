const formLogin = document.querySelector("#form-login");
const inputLogin = formLogin.querySelector("input");
const buttonLogin = formLogin.querySelector("button");

function consolView(event){event.preventDefault();console.log(event);}
formLogin.addEventListener("submit", consolView);

const link = document.querySelector("a");

function clickHandle(event){

    alert("누르면 이동")
}

link.addEventListener("click", consolView);