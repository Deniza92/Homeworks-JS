console.log("Its working")

/*
HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/

function tellStory(storyArguments) {
    let [name, mood, activity] = storyArguments;
    return 'This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.'
}
 let myStory = tellStory(["Nisa", "happy", "playing"]);
 console.log(myStory);
 

/*
HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument and return the sum.
Print it in the console or in alert
*/


function sumArray(array){
    let total = 0;
   for(let i = 0; i < array.length; i++) {
   total += array[i];
   }
   return total;
}

console.log(sumArray([3,12,30,40,65]));

/*
HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC !"
*/

function joinStrings(arr) {
    let joined = arr.join("");
    return joined;
}
let myArray = ["Hello", "there", "students", "of", "SEDC"];
let result = joinStrings(myArray);
console.log(result);



/*
HOMEWORK #4
Title: Looping structures

Description:Write a loop in javascript that goes from 1-20 that will print each number in the console and add "number is even" after every even number and add "number is odd" after every odd number
*/



for (i = 0; i < 21; i++) {
    console.log(i);
    if (i % 2 === 0) {
        console.log("Number is even");
    }else {
        console.log("Number is odd");
    }
}

/*HOMEWORK #5
Title: Looping structures
Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/




/*
HOMEWORK #6
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/
 
function fullNames(firstNames, lastNames) {
    let fullName = [];
    for (i = 0; i < firstNames.length; i++) {
        fullName.push('${i+1} ${firstNames[i]} ${lastNames[i]}');

    }
    return fullName;
}
let firstName = ["Bob", "Jill"];
let lastName = ["Gregory", "Wurtz"];
let fullName = fullNames(firstName, lastName);
console.log(fullName);
