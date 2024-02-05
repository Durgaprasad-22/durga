// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }
// let j = 1;
// while (j < 11) {
//     console.log(j);
//     j++;
// }
// let enames = ['durga', 'prasad', 'stanley', 'sravan', 'samad'];
// for (let names of enames) {
//     console.log(names);
// }
// for (let i in enames) {
//     console.log(enames[i])
// }
// // for in loop
// const customer = {
//     'name': 'durga',
//     'phone': 322433524,
//     'address': 'vij'
// }
// for (let j in customer) {
//     console.log(customer[j]);
// }
// const eName = "Durga";
// for (let name of eName) {
//     console.log(name);
// }
// for (let i = 0; i < eName.length; i++) {
//     console.log(eName[i]);

// }
let Enames = [12, 34, 5, 6, 55, 6];
Enames.forEach(function(value) { //call back function
    console.log(value)
});


//set
const snames = new Set(['stanley', 'samad', 'durga', 'sravan', 'stanley']);
for (let i of snames) {
    console.log(i);
}


//map

const products = new Map([
    ["lg", 30000],
    ["hp", 50000],
    ["apple", 100000]

]);
for (let s of products) {
    console.log(s);
}


//using for each
products.forEach(function(value, key) {
    console.log(value + " " + key);
})