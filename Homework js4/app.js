console.log("Its working");

/*Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the age based on those years.
outputs the result to the screen like so: "You are NN years old"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.*/


let userInput = prompt(
    "Enter your birth year and you will now how old are you"
);

let numberResult = Number(userInput);
let currentYear =  new Date().getFullYear();
if (Number.isNaN(numberResult)) {
    console.log("Enter your year of birth");
}
if (userInput === null) {
    console.log("Please try again");
}
 if (!Number.isNaN(numberResult) && userInput !=null) {
function calculateAge(birthYear, currentYear){
console.log("Your birth date is", birthYear);
console.log("Current year is", currentYear);
let result = currentYear - birthYear;
return result;
}
let birthYear = userInput;
let result = calculateAge(birthYear , currentYear);
console.log("You have", result, "years");
 }
  


/*Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined
*/


function typeOf(parameter) {
    let result = typeOf;
    console.log(parameter + ":" + result);
    return result;
}

typeOf(null);
typeOf(100);
typeOf("Hello sedc");
typeOf(10 > 5);
typeOf(undefined);



/*Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well */

let inputHumanAge = prompt(
    "Enter how old are you and you will now your dog age "
);
 let resultHumanAGe = Number(inputHumanAge);
 if (Number.isNaN(resultHumanAGe)) {
    console.log("Enter number for your years");
 }
 if (inputHumanAge === null) {
    console.log("Try again"); 
 }
 if (!Number.isNaN(resultHumanAGe) && inputHumanAge != null) {
    function humanAge(humanYears) {
        console.log("You have", humanYears)
        let result = humanYears * 7;
        return result;
    }
    let humanYears = inputHumanAge;
    let result = humanAge(humanYears);
    console.log("You have", result, "years as a dog");
}



/* So ATM domasnata zapnav skros se mi se ispomesa ke se probam pak ili ke cekam ako Borce ja resi na cas, imam problem stvarno nekogas ne znam kako da gi imenuvam varijablite nemam ideja. */