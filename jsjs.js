const b = document.querySelector(".uuuu h1");
const first = b.className; // 최초의 클래스

function a(){
    // toggle (메소드로 만든 함수)는 신이다.
    const asd = "asd";
    if (b.classList.contains(asd)){
        b.classList.remove(asd);
    } else {
        b.classList.add(asd);
    }
}

b.addEventListener("click", a);
