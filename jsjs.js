const b = "wqwdwd";
const a = [b,2,3,2,12313,43523243,"1234145325",436235,1232];

console.log(a);
console.log(a[4]);

a.push(99999); // 맨 뒤에 추가, 맵핑한 주소가 아닌 데이터 자체가 바뀌기에 const 도 가능
console.log(a[-1]);