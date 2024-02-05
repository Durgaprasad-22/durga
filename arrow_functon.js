//arrow function
//=>
const result = () => {
    console.log("hi Durga ...!")
}
result();

//2nd case
var fn1 = () => console.log("Hi stanley"); //no need block brackets for only one statement
fn1();

//3rd case
//function with parameters
const res2 = (a, b) => console.log("sum is :" + (a + b));
res2(39, 44);

//4th case
//function withs single value
const res3 = a => console.log("a value is :" + a);
res3("sammyyyy");

//function With return value
const res4 = (a, b) => {
    return a * b;

}
const m1 = res4(34, 56);
console.log("result :" + m1);

// function without return statement


const res5 = (a, b) => a * b;
const m2 = res5(45, 73);
console.log("value :" + m2);


//arrow function 
let bonus = 5000;
const totSal = (basic, pf, hra) => basic + pf + hra;
let Total = totSal(15000, 3000, 9000);
if (Total <= 20000) {
    console.log("you are eligible for Bonus");
    console.log("total salary is " + (Total + bonus));
} else {
    console.log("you are not eligible for bonus");
    console.log("total salary is " + Total);
}