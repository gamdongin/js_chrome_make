const formLogin = document.querySelector("#form-login");

const inputLogin = formLogin.querySelector("input");
const buttonLogin = formLogin.querySelector("button");

// const inputLogin = document.querySelector("#form-login input");
// const buttonLogin = document.querySelector("#form-login button");

function consolView(event){
    // 무슨 이름이든 첫번째 공간에 매개변수가 오면 방금 일어난 이벤트를 전달함
    event.preventDefault();
    // 기본 행동을 막음 여기선 새로고침
    console.log(event);
}

formLogin.addEventListener("submit", consolView);