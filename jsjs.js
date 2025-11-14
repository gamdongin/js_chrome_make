const b = document.querySelector(".uuuu h1");
const first = b.className; // 최초의 클래스

function a(){
    // classB = b.className; 작동 안함

    const asd = "asd";
    if (b.className === asd+" "+first){
        b.className = first;
        // 기존의 클래스는 삭제하고 새로 지정
    } else {
        b.className = asd+" "+first;
        //  html에 클래스를 지정하고 그걸 css가 감지
    }
}

b.addEventListener("click", a);
