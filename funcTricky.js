//call can be use to pass the objects as a  arguments and it can aslo pass exta parameters 
const person = {
    FullName: function(age, mobile) {
        console.log(this.firstName + " " + this.lastName + " " + age + " " + mobile);
    }
}
const person2 = {
    firstName: "durga",
    lastName: "prasad"
};
person.FullName.call(person2, 18, 338837372);



//in apply method pass the parameters through array list
const person3 = {
    FullName: function(age) {
        console.log(this.firstName + " " + this.lastName + " " + age + " ");
    }
}
const person4 = {
    firstName: "durga",
    lastName: "prasad"
};
person3.FullName.apply(person4, [12]);


//clousers
let counter = 0;
const add = () => {
    let counter = 2;
    counter += 1;
    return counter;
}
console.log(add());
console.log(add());
console.log(add());



const add1 = (() => {
    let counter = 2;
    counter += 1;
    return function() {
        let counter = 4;
        counter = +4;
        return counter;
    }
})(); //self envoking function
console.log(add1());


//destructing
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
console.log(vehicles);
const productinifo = {
    pid: 90,
    pName: "santoor",
    pcost: 300
};
const { pid, pName, pcost } = productinifo;
console.log(pid);
console.log(pName);
console.log(pcost);