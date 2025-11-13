function a(){
    console.log("click");
    b.style.color = "red"
}

const b = document.querySelector("div.uuuu h1");
console.log(b);

b.addEventListener("click", a);
// b 의 영역을 제대로 클릭해야 작동함
