const formLogin = document.querySelector("#form-login");

const inputLogin = formLogin.querySelector("input");
const buttonLogin = formLogin.querySelector("button");

// const inputLogin = document.querySelector("#form-login input");
// const buttonLogin = document.querySelector("#form-login button");

function consolView(){
    if (inputLogin.value === ""){
        console.log("이름 작성");
    } else {
        console.log("hello "+inputLogin.value);
    }
    
}

buttonLogin.addEventListener("click", consolView);