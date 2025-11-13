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
// || : or , && : and
else{
    console.log("적셔!");
}