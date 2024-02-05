//  function Display() {
//      console.log("stanley loves tabasum");
//  }
//  Display();

//  //function



//  function show(a, b) {

//      console.log("Goood morining " + a + " " + b);
//  }
//  show("stanley", "stephan");
let Ename = "Durga";
if (Ename === "Durga") {
    console.log("hiii")
}
const eid = 2993;
let basic = 15000;
let pf = 2000;
let hra = 3000;

function totalSalary(basic, pf, hra) {
    return basic + pf + hra;
}
let totSal = totalSalary(Ename, eid, basic, pf, hra);
if (totSal <= 20000) {
    console.log("you are eligble for bonus");
    console.log(Ename + "\n" + eid + "\n" + (totSal + 5000));
} else {
    console.log("you are not eligble for bonus");
    console.log(Ename + "\n" + eid + "\n" + totSal);
}