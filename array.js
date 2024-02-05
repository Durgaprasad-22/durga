const ser = ["durga", "stanley", "sravan", "amar", "balu"];
// console.log(ser.shift());
// console.log("\n");
// console.log(ser[0]);
const num = [34, 45, 23, 20, 5, 6];
let sum = num.reduce((total, value) => total + value);
console.log(sum);
let result = num.forEach(function(value) { console.log(value) });
console.log(ser.sort()); // sort method  only for strings
console.log(num.sort((a, b) => a - b)); //for ascending order
console.log(num.sort((a, b) => b - a)); //for descending ordere
let sqr = num.map((value) => value * 2);
console.log(sqr);
let filt = num.filter((value) => value >= 20);
console.log(filt);
const m1 = ["jan", "feb", "march", 'apr'];
const m2 = ["may", "june", "july", 'aug'];
const m3 = ["sep", "oct", "nov", 'dec'];
let year = [...m1, ...m2, ...m3];
console.log(year);