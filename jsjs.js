const a = document.getElementsByClassName("sdfefgfrthgjmgtr");
console.log(a);
console.log(a.className);

const b = document.querySelector(".uuuu p");
console.log(b);
// uuuu라는 클래스가 있는 요소의 자식 중, 태그가 p인 거 중 첫번째 것 만 가져옴

// - getElementsByClassName() : 많은 element를 가져올때 씀      (array를 반환)
// - getElementsByTagName() : name을 할당할 수 있음             (array를 반환)

// - querySelector : element를 CSS selector방식으로 검색        단 하나의 element를 return해줌
// 뒤에 All 붙히면 다가져옴

// getElementsBy~ 로는 자식 요소를 검색할 수 없어서 querySelector를 사용