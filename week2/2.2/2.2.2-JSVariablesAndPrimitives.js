const { type } = require("os");

// create a constant variable called "name" that references a string
const name = "malik";
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "crybaby";
// create a reassignable variable called "wage" that references a number
let wage = 7;
// create a variable called "age" that references a number, should it be reassignable?
let age = 90;
// create a variable called "onlyChild" that references a boolean
let onlyChild = true;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// print the types of two variables that reference two different data types (typeof)
console.log(typeof favoriteSong);
console.log(typeof age);
// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "sprite";

// print the data type of "favoriteThing"
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "crybabe";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = "coke";
// Happy Birthday!
// Reassign "age" to a new value
age = 7;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 100;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
console.log("hi jane you are "age" and you have "wage" dollar")
