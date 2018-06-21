"use strict";


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// conditionals problem 1 \\



// didn't start with setting userConfirmRequest as a variable \\
//
// var userConfirmRequest = confirm('Please confirm you will enter a number.');
//
// console.log(userConfirmRequest)
//
// if (userConfirmRequest) {
//
//     var userNum = prompt('Please enter a number');
//
//     if (!isNaN(userNum) && userNum !== true && userNum !== false) {
//
//         var userNum = parseFloat(userNum);
//
//         var evenOddMessage = (userNum % 2 === 0) ? 'That\'s an EVEN number' : 'That\'s an ODD number';
//         alert(evenOddMessage);
//
//         var addToHundred = userNum + 100;
//         alert('Your number plus 100 is: '+ (userNum +100));
//
//         var posOrNegativeMessage = (userNum >= 0) ? 'That\'s a POSITIVE number' : 'That\'s a NEGATIVE number';
//         alert(posOrNegativeMessage);
//     } else {
//         alert('That\'s NOT a valid entry. Please try again');
//     }
// }


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//what is the JOB of the function? make sure to know that.
// possible to re-factor the block of code by setting a variable inside of the function, then use return at the
// end with that variable.


// function analyzeColor(color) {
//     if (color === 'blue') {
//         return color + ' is the color of the sky';
//     } else if (color === 'red') {
//         return 'strawberries are ' + color;
//     } else if (color === 'green') {
//         return 'grass is ' + color;
//     } else if (color === 'yellow') {
//         return 'Bananas are ' + color;
//     //    included else to catch errors.
//     } else {
//         return color + ' is not a valid color';
//     }


//     var result;
//
//     switch (color) {
//         case 'blue':
//             result = color + ' is the color of the sky';
//             break;
//         case 'red':
//             result = 'strawberries are ' + color;
//             break;
//         case 'yellow':
//             result = 'Bananas are ' + color;
//             break;
//         default:
//             result = color + ' is not a valid color';
//     }
//
//     return result;
//
// }

// if you use a return, you don't need to have a break within the switch case. You would then use the return OUTSIDE of
// the switch because it belongs to the function.
// the DEFAULT is a switch's version of an ELSE result.

// console.log(analyzeColor('blue'));
// console.log(analyzeColor('red'));
// console.log(analyzeColor('green'));
// console.log(analyzeColor('yellow'));
// console.log(analyzeColor('orange'));
// console.log(analyzeColor(''));
// console.log(analyzeColor('99'));
// console.log(analyzeColor('pink'));
// console.log(analyzeColor(null));
// console.log(analyzeColor(1000));

// var userInputColor = prompt('What color do you like?');
// analyzeColor(userInputColor);
//
// function analyzeColor(colorName) {
//     if (colorName == 'red') {
//         alert('Strawberries are red.');
//
//     }
//     if (colorName == 'blue') {
//         alert('The sky is blue.');
//
//     }
//     if (colorName == 'orange') {
//         alert('Oranges are orange. ');
//
//     }
//     if (colorName == 'yellow') {
//         alert('Banana\'s are yellow.');
//
//     }
//     if (colorName == 'indigo') {
//         alert('Indigo? Nope.');
//
//     }
//     if (colorName == 'violet') {
//         alert('Violet is a mix of red a blue, right?');
//
//     }
//     if (colorName == 'green') {
//         alert('Grass is green... At least it should be.');
//     }
// }

// does calling the function like this never end unless I put the console.log???
// & why does the last result the ELSE statement show right after the variable is named?

// analyzeColor('red');
// analyzeColor('red');
// analyzeColor('green');
// analyzeColor('pink');
// analyzeColor('pink-ish?');


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];




/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// analyzeColor(randomColor); this WORKS when removing the ELSE statement.

// console.log(analyzeColor(randomColor));
// this worked because I used an if / else if approach.

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// completed inside the original function

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userInputColor = prompt('What color do you like?');
// analyzeColor(userInputColor);
//
//
// alert(analyzeColor(prompt('Give me a color')));
// // one-liner from Fer 6/15/18
//
// // step-by-step of the process above is:
// var usersColor = prompt('Give me a color');
// var res = analyzeColor(usersColor);
// alert(res);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//Fer's approach

// function test() {}



// function calculateTotal(luckyNumber, total) {
//     var discountedPrice;
//
//     switch (luckyNumber) {
//         case 0:
//             discountedPrice = total;
//             break;
//         case 1:
//             discountedPrice = total * (0.90);
//             break;
//         case 2:
//             discountedPrice = total * (0.75);
//             break;
//         case 3:
//             discountedPrice = total* (0.65);
//             break;
//         case 4:
//             discountedPrice = total * (0.50);
//             break;
//         case 5:
//             discountedPrice = 0;
//             break;
//         default:
//             discountedPrice = 'invalid lucky number';
//     }
//
//     return discountedPrice;
// }
//helps to increase the number variant to ensure the default value in the switch works correctly.

// var luckyNumber = Math.floor(Math.random() * 6);
//
// console.log(luckyNumber);
// console.log(calculateTotal(luckyNumber, 100));

// luckyNumber = Math.floor(Math.random() * 6);
// console.log(luckyNumber);
// console.log(calculateTotal(luckyNumber, 500));
//
// luckyNumber = Math.floor(Math.random() * 6);
// console.log(luckyNumber);
// console.log(calculateTotal(luckyNumber, 500));

//switch case inside of the function? Is it better to use it here?

// var customerNumber = Math.floor(Math.random() * 6);
// console.log(customerNumber);
// the above works to gnerate customer's luckyNumber
//
// function calculateTotal(totalAmount, luckyNumber) {
//
//     if (luckyNumber === 0) {
//         discountPercent = alert('sorry, no discount today!');
//         console.log('no discount, customer pays full price:' + totalAmount);
//     } else if (luckyNumber == 1 ) {
//         discountPercent = .1;
//         alert('10% off for you! A penny saved is a penny earned :)');
//     } else if (luckyNumber == 2 ) {
//         discountPercent = .25;
//         alert('You saved 25%!');
//     } else if (luckyNumber == 3 ) {
//         discountPercent = .35;
//         alert('35% off for you!');
//     } else if (luckyNumber == 4 ) {
//         discountPercent = .50;
//         alert('Nice! You get 50% off today!');
//     } else if (luckyNumber == 5 ) {
//         discountPercent = 100;
//         alert('Congratulations! You get everything for free!');
//
//     }
//
//     //this doesn't work for amounts over 100
//     var discountPercent = (discountPercent * 100);
//     console.log('Amount saved from discount (in dollars):' + discountPercent);
//
//     var newDiscountedPriceInDollars = totalAmount - discountPercent;
//     console.log('new price:' + newDiscountedPriceInDollars);
// }

// calculateTotal(100, 5);




    // how would I incorporate a switch here???
    // switch(luckyNumber) {
    //     case 0:
    //         discountPercent = 0;
    //         break;
    //     case 1:
        //     discountPercent = .1;
        //     break;
        // case 2:
        //     disountPrecent = .25;
        //     break;
        // case 3:
        //     discountPercent = .35;
        //     break;
        // case 4:
        //     discountPercent = .50;
        //     break;
        // case 5:
        //     discountPercent = 1;
        //     break;
    // }

   // var discountPercent = luckyNumber * .1;
   // return totalAmount - discountPercent;

// }

// var discountPercentage = [ 0, 1, 2, 3, 4, 5];
//
// console.log(luckyNumber);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// NOTHING says a discount for 6?????? **************************!!!!!!!
// Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
// console.log(luckyNumber);
// var userBillSubmitted = prompt('How much was your bill today?');
//
// calculateTotal(userBillSubmitted, luckyNumber);


