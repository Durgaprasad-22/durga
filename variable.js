// //plain javasript we use var keyword
// var Rollnbr = 12;
// console.log(Rollnbr);
// //advanced javascript
// let Name = 'Durga';
// console.log("let :" + Name);
// const PI = 3.14;
// console.log("const variable:" + PI);


// local scope
function sample() {
    var stanley = 100;
    console.log(stanley);
}
sample();
//console.log(stanley);


// global scope
let b = 5;

function sample2() {
    console.log("function  :" + b);
}
sample2();
console.log(b);

//block scope
{
    var ab = 20;
    var cd = 30;
    console.log(ab + "-" + cd);
}
console.log(ab + " " + cd);
var Durga = 22;
var Durga = 30;
console.log(Durga);
for (let i = 0; i < 19; i++) { //in for loop var variable we can access
    console.log(" ::" + i); // but with let varible we can't access
}
// console.log(i);

//redeclaration is possible in var
//but redeclaraton is  not possible in let