// prompt() 함수는 사용자에게 창을 띄어 값을 받음.
// prompt()를 사용하면 답을 할때까지 코드의 실행을 멈추고, 매우 오래된 방법임. css로 바꾸지도 못함.
// 틀딱을 넘어선 해골딱딱 함수

const a = prompt("값 입력");
// 기본적으로 문자열 타입
console.log(typeof a, typeof parseInt(a));
console.log(a, parseInt(a));
// NaN : not a number