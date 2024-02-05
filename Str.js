const msg = "  hi stephy bangaram bujji bangaram  ";
console.log(msg.length);
console.log(msg.toUpperCase());
console.log(msg.slice(3, 7));





//how to get part of string info
//slice(),substr(),substring()
console.log(msg.slice(16, 37));
console.log(msg.slice(1, 7));
console.log(msg.substring(21, 27));
console.log(msg.substr(12, 4));
console.log(msg.toLowerCase(16));
console.log(msg.toUpperCase(13));

//replace method
console.log(msg.replace(/bangaram/i, "bondam"));
console.log(msg.replace(/bangaram/g, "bondam"));



//trim
console.log(msg.trim(5));

//indexOf
console.log(msg.indexOf("bujji"));
console.log(msg.indexOf("bujji", 4));
console.log(msg.lastIndexOf("bujji"));
console.log(msg.lastIndexOf("bujji", 7));
console.log(msg.search("bujji"));

let text = " mern full stack   ";
console.log(text.trim(7));

console.log(text.trimStart(1));

//charat
console.log(text.charAt(7));
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
//padStart
console.log(text.padStart(4, "hi"));