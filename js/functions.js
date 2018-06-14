"use strict";

//*** IFFE START ***\\


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// can use prompt to be more dynamic. if used only once, not important to do that
// console.log(sayHello(name));


function sayHello(name) {
    // var name = "Mykel";
    return ("Hello, " + name +"!");
}

// sayHello(name); doesn't appear because you don't want repeated results for single functions/vars etc
// document.write(name); was added inside the other function sayHello2 to avoid repition
//
// console.log(sayHello("Mykel"));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// sayHello("Mykel");
// the result of sayHello is now stored inside helloMessage. This allows you to recall it as much as you want.

var helloMessage = sayHello("Mykel");

console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// It's not logging a third result to the sayHello function unless I use console.log.. is this correct??? YES IT IS! 6/13/18

var myName = "Mykel";
console.log(sayHello(myName));


// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// this function checks to see if the argument passed through is EQUAL to 2. You can also use the
// random number variable defined on line # 49 to see a different result each time you refresh
// == works the same way as ===. The 3 just ensures that data types match
// always test in 3's - something that works, doesn't work and something that should break it
// ****test by putting console.log INSIDE the function**

function isTwo(number) {
    console.log('random', number);
    // test by adding the above in this function
    return number === 2;
}

console.log(isTwo(random));
//yes & no
console.log(isTwo(2));
//true
console.log(isTwo(1));
//false
console.log(isTwo(2.0));
// true



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

//Re-visit this to try and use .toFixed(2) so that tip amount comes out to decimal number

function calculateTip(bill, tipPercent) {
    var tipValue = tipPercent / 100 * bill;
    return bill + tipValue;
}

console.log(calculateTip(157, 15));
console.log(calculateTip(1000, 9));
console.log(calculateTip(37.95, 18));
console.log(calculateTip(273, 5));
console.log(calculateTip(99, 1));
console.log(calculateTip(9, 100));
console.log(calculateTip(100, 50));
// console.log(calculateTip(200, 10));
// console.log(calculateTip(25.50, 25));
// 20/100 = 0.2 * 100 = $20 for tip amount, add tipValue to lbill

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


// alert('Hope dinner was good. It\'s time to pay the bill.');
//
// var bill = prompt('How much was your meal?');
//
// var tipPercent = prompt('What percentage would you like to tip?');
//
// console.log(calculateTip(bill, tipPercent));
// this still logs 11010... why?

// console.log(calculateTip(mealValueInDollars, tipAmountInDollars));
// //this outputs 11010





/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// function applyDiscount(originalPrice, discountPercent, discountConvert) {
//     var originalPrice = 100;
//     var discountPercent = .10;
//     return originalPrice - (discountPercent * 100);
// }

// console.log(applyDiscount(45.99, 12));
//
// console.log




// END IIFE
