function a(){
    console.log("click");
    b.style.color = "red";
}
function c(){
    b.style.color = "blue";
}

const b = document.querySelector("div.uuuu h1");
console.log(b);

b.addEventListener("mouseenter", a);
b.addEventListener("mouseleave", c);

