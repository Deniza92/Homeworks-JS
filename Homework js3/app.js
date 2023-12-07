console.log("its working");

//Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

//Formula for Chinese Zodiac caluclation: (year - 4) % 12. 
//Possible values: 0 - Rat 1 - Ox 2 - Tiger 3 - Rabbit 4 - Dragon 5 - Snake 6 - Horse 7 - Goat 8 - Monkey 9 - Rooster 10 - Dog 11 - Pig

let userInsert = prompt ("Enter your birth year and check what Chinese zodiac you are");
let numberResult = Number(userInsert);
 if (Number.isNaN(numberResult)) {
   console.log("Enter the year of birth");
 }
 let zodiacValue = (userInsert - 4 ) % 12;

 if (zodiacValue === 0) {
    console.log("Your Chinese Zodiac is Rat");
} else if (zodiacValue === 1) {
    console.log("Your Chinese Zodiac is Ox");
} else if (zodiacValue === 2) {
    console.log("Your Chinese Zodiac is Tiger");
} else if (zodiacValue === 3) {
    console.log("Your Chinese Zodiac is Rabbit");
} else if (zodiacValue === 4) {
    console.log("Your Chinese zodiac is Dragon");
} else if (zodiacValue === 5) {
    console.log("Your Chinese Zodiac is Snake");
} else if (zodiacValue === 6) {
    console.log("Your Chinese Zodiac is Horse");
} else if (zodiacValue === 7) {
    console.log("Your Chinese Zodiac is Goat");
} else if (zodiacValue ===8) {
    console.log("Your Chinese Zodiac is Monkey");
} else if (zodiacValue ===9) {
    console.log("Your Chinese Zodiac is Roster");
} else if (zodiacValue ===10) {
    console.log("Your Chinese Zodiac is Dog");
} else {
    console.log("Your Chinese Zodiac is Pig");
}
