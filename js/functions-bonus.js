// ================ SIMPLE FUNCTION DRILLS

"use strict";

// IIFE START
// (function (){

// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

// function returnTwo() {
//     return 2;
// }
//
// console.log(returnTwo());


// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

// function returnName() {
//     return "Mykel Kovar";
// }
//
// console.log(returnName());

// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))

// function addThree(number) {
//     return number + 3;
// }
//
// console.log(addThree(5));
// console.log(addThree(10));
// console.log(addThree(111));


// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

    // function sayString(string) {
    //     console.log('this is input:\n', string);
    //     return string;
    // }
    //
    // console.log(sayString("Hello World"));

// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()

// not fully understanding why this wouldn't log my results when trying to use sayHowdy(); * first approach 6/13/18

                    // var sayHowdy = "Howdy!";
                    //
                    //     console.log(sayHowdy());

//    second approach 6/14/18, works much better.
//     function sayHowdy() {
//         return "Howdy!";
//     }
//
//     console.log(sayHowdy());
//

// ---Remember this function does not need a defined return value


// function made to return average between variables a & b

// function getAverage(a, b) {
//     var average = (a + b) / 2;
//     console.log(average);
//     return average;
// }
//
// var myAverage = getAverage(150, 100);
// console.log(('the average is ' + myAverage));

// var myAverage = getAverage(20, 1);
// console.log(('the average is ' + myAverage));


// just in case file for function warmup isn't found:
//    function makeUsername(firstName, age) {
//     return firstname.length + firstName.charAt(0).toLowerCase() + age;
//    }
//    console.log(makeUsername());
//



// ================ CHALLENGE FUNCTION DRILLS
// Write a function called `identity(input)` that takes in an argument called input and returns that input.

// function identity(input) {
//     return input;
//     }
//
// console.log(identity("mykel"));
// console.log(identity(99));
// console.log(identity(true));
//

// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.

// function getRandomNumber(min, max) {
//     var randomNumber = Math.floor(Math.random(min, max) * 10);
//     console.log(randomNumber);
//     return randomNumber;
// }
//
// console.log(getRandomNumber(1,10));

// Write a function called `first(input)` that returns the first character in the provided string.

// function first(input) {
//     return input.charAt(0);
// }
//
// console.log(first("Mykel"));

// Write a fuction called `last(input)` that returns the last character of a string
//
// function last(input) {
//     return input
// }

// Write a function called `rest(input)` that returns everything but the first character of a string.
// Write a function called `reverse(input)` that takes a string and returns it reversed.
// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
// Write a function called `count(input)` that takes in a string and returns the number of characters.
// Write a function called `add(a, b)` that returns the sum of a and b
// Write a function called `subtract(a, b)` that return the difference between the two inputs.
// Write `multiply(a, b)` function that returns the product
// Write a divide(numerator, denominator) function that returns a divided by b
// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.












//IIFE END
//
// })();