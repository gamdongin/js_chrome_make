function a(){
    b.style.color = "red";
}
function c(){
    b.style.color = "blue";
}
function d(){
    b.style.color = "green";
    console.log("click");
    b.removeEventListener("mouseenter", a);
    b.removeEventListener("mouseleave", c);
    // .addEventListener 는 .removeEventListener 로 삭제가능
}
const b = document.querySelector("div.uuuu h1");
b.addEventListener("click", d);
b.addEventListener("mouseenter", a);
// b.onmouseenter = a;
b.addEventListener("mouseleave", c);
// b.onmouseleave = c;
window.addEventListener("copy", function(){this.alert("copyyyyyyyyy");});