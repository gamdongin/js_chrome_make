age = parseInt(prompt("나이"));
console.log(isNaN(age));
// NaN : not a number

condition = isNaN(age)
if (condition){
    console.log("이거 숫자 아닌데?");
}
else if(age<=18 || age>60){
    console.log("nope");
}
// || : or , && : and , === : 등호
else{
    console.log("적셔!");
}

// == 은 값만을 비교하고 === 은 유형도 비교
// 0 == false ---> true
// 0 === false ---> false

alert(1 == '1') //true
alert(1 === '1') //false
alert(null == undefined) //true
alert(null === undefined) //false
alert(true == 1); //true
alert(true === 1) //false
alert(true == '1') //true
alert(true === '1') //false

// 배열, 객체는 같은 같을 가져도 다른 주소를 참조함

var a = [1,2,3];
var b = [1,2,3];
console.log(a == b); // false
console.log(a === b); // false