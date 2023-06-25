// console.log("hello world");
// const a = 10;
// const b = 20;
// console.log(a+b);
const myMathLib =require('./math')

const sum = myMathLib.addTwonum(10,20);
const diff = myMathLib.subTwonum(20,10);

console.log(sum);
console.log(diff);