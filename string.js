//string can becreatedin two ways
//literal syntax
const msg = "welcome to mern fullstack developer";
console.log(msg);
//object syntax
const name = new String("diet");
console.log(name);



//string methods
//to know the length of a string
console.log(msg.length);


//how to get part of string info
//slice(),substr(),substring()
console.log(msg.slice(16, 37));
console.log(msg.slice(1, 7));
console.log(msg.substring(21, 27));
console.log(msg.substr(12, 4));


//convert cases
//touppercase()
//tolowercasr()

console.log(msg.toLowerCase(16));
console.log(msg.toUpperCase(13));



//replace string content
//replace()


console.log(msg.replace(/fullstack/, "fs"));


const firstname = "a";
const secondname = "b";
console.log(firstname.concat(secondname));




let text = "mern full stack";
console.log(text.trim(7));

console.log(text.trimStart(1));

//charat
console.log(text.charAt(0));
//charcodeat
console.log(text.charCodeAt(5));
//slice
console.log(text.slice(0.7));
//trim
console.log(text.trim(9));
//repeat
console.log(text.repeat(3));
//trimstart
console.log(text.trimStart(9));
//trimend
console.log(text.trimEnd(5));
//split
console.log(text.split(1));