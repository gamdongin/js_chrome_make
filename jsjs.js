let a = 12;
let b = 3;
let c = 0;

// let 재선언 금지, 재할당 가능
// const 재선언 금지, 재할당 금지
// var 재선언 가능, 재할당 가능
// var 쓰면 대가리 깨짐

console.log(a + b);
console.log(a / b);
console.log(a * b);

c = a;
a = b;
b = c;

console.log(a + b);
console.log(a / b);
console.log(a * b);