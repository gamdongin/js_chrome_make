const b = document.querySelector(".uuuu h1");
console.log(b);
function a(){
    colorB = b.style.color
    if (colorB === "red"){
        b.style.color = "blue";
    }
    else{
        b.style.color = "red";
    }
    console.log(b.style.color);
}

b.addEventListener("click", a);
