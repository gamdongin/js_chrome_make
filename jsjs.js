const formLogin = document.querySelector("#form-login");

const inputLogin = formLogin.querySelector("input");
const buttonLogin = formLogin.querySelector("button");

// const inputLogin = document.querySelector("#form-login input");
// const buttonLogin = document.querySelector("#form-login button");

function consolView(){
    const name = inputLogin.value
    if (name === ""){
        alert("이름 작성");
    } else if (name.length > 15){
        // html 자체적으로 제한 가능 , 그냥 연습용
        //  근데 form 쓰면 자동으로 url 이 바뀌고 새로고침돼서 이런것도 필요
        alert("15자 이내로 ");
    } else {
        console.log("hello "+inputLogin.value);
    }
    
}

buttonLogin.addEventListener("click", consolView);