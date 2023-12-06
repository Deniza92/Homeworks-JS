console.log ("Its working");

let userQuestion = prompt("How much money you have");
let numberResult = Number(userQuestion);

if (Number.isNaN(numberResult)) {
    console.log("Insert Ok");
} else if (numberResult >= 100) {
    console.log("Go on a vacation");
} else if (numberResult >= 50) {
    console.log("Go to shopping");  
} else if (numberResult >= 20) {
    console.log("You can buy a cooffe");
} else {
    console.log("Stay at home");
}


