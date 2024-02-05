//2nd way of object syntax creation
const obj2 = new Object();
obj2.Pname = "Durga";
obj2.id = 101;
Object.values(obj2).forEach((value) => console.log(value));


const obj1 = {
    firstName: "Dugra",
    lastName: "Devarapalli",
    pID: 1001,
    Address: "Vijayawada",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(obj1.fullName());