// // ================ SIMPLE FUNCTION DRILLS
// //
// // "use strict";
// //
// // // var age = 40;
// // //
// // // if (age < 21 ) {
// // //     alert('You CANNOT legally drink');
// // // } else if (age === 21) {
// // //     alert('You are free to drink.. finally.');
// // // } else {
// // //     alert('We age like fine wine');
// // // }
// //
function ageCheck(userAge) {
    if (userAge < 21) {
        return 'You cannot legally drink yet.';
    } else if (userAge === 21) {
        return 'You can finally get into a bar using your own ID. Nice!';
    } else {
        return 'We\'re aging like fine wine, right?';
    }
}

console.log(ageCheck(30));
console.log(ageCheck(2));
// // // console.log(ageCheck(18));
// // // console.log(ageCheck(21));
// //
// //
// //
// // // IIFE START
// // // (function (){
// // //
// // // // 1) Make a function called returnTwo() that returns the number 2 when called
// // // // ---Test this function with console.log(returnTwo())
// // //
// // // function returnTwo() {
// // //     return 2;
// // // }
// // //
// // // console.log(returnTwo());
// // //
// // //
// // // // 2) Make a function called returnName() that returns the string of your name
// // // // ---Test this function with console.log(returnName())
// // //
// // // function returnName() {
// // //     return "Mykel Kovar";
// // // }
// // //
// // // console.log(returnName());
// // //
// // // // 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// // // // ---Test this function with console.log(addThree(5))
// // //
// // // function addThree(number) {
// // //     return number + 3;
// // // }
// // //
// // // console.log(addThree(5));
// // // // console.log(addThree(10));
// // // // console.log(addThree(111));
// //
// //
// // // 4) Make a function called sayString() which returns the string input passed in.
// // // ---Test this function with console.log(sayString())
// //
// //     // function sayString(string) {
// //     //     console.log('this is input:\n', string);
// //     //     return string;
// //     // }
// //     //
// //     // console.log(sayString("Hello World"));
// //
// // // 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// // // ---Test this function by directly calling sayHowdy()
// //
// // // not fully understanding why this wouldn't log my results when trying to use sayHowdy(); * first approach 6/13/18
// //
// //                     // var sayHowdy = "Howdy!";
// //                     //
// //                     //     console.log(sayHowdy());
// // //
// // //    // second approach 6/14/18, works much better.
// // //     function sayHowdy() {
// // //         return "Howdy!";
// // //     }
// // //
// // //     console.log(sayHowdy());
// // //
// // //
// // //     // ---Remember this function does not need a defined return value
// // //
// // //     // function made to return average between variables a & b
// // //
// // // function getAverage(a, b) {
// // //     var average = (a + b) / 2;
// // //     console.log(average);
// // //     return average;
// // // }
// //
// // // var myAverage = getAverage(150, 100);
// // // console.log(('the average is ' + myAverage));
// //
// // // var myAverage = getAverage(20, 1);
// // // console.log(('the average is ' + myAverage));
// //
// //
// // // just in case file for function warmup isn't found:
// // //    function makeUsername(firstName, age) {
// // //     return firstname.length + firstName.charAt(0).toLowerCase() + age;
// // //    }
// // //    console.log(makeUsername());
// // //
// //
// //
// //
// // // ================ CHALLENGE FUNCTION DRILLS
// // // Write a function called `identity(input)` that takes in an argument called input and returns that input.
// //
// // // function identity(input) {
// // //     return input;
// // //     }
// // //
// // // console.log(identity("mykel"));
// // // console.log(identity(99));
// // // console.log(identity(true));
// //
// //
// // // Write a function called `getRandomNumber(min, max)` that returns a random number
// // // between min and max values sent to that function call. ***********
// //
// // function getRandomNumber(min, max) {
// //     var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// //     // console.log(randomNumber);
// //     return randomNumber;
// // }
// //
// // // console.log(getRandomNumber(20,23));
// //
// // // Write a function called `first(input)` that returns the first character in the provided string. ***********
// // //
// // // function first(input) {
// // //     return input.charAt(0);
// // // }
// //
// // // console.log(first("Codeup"));
// // // console.log(first("Mykel"));
// // // console.log(first("denver"));
// // // console.log(first("queen"));
// //
// // // Write a fuction called `last(input)` that returns the last character of a string **************
// // // -1 will return the last character. You can also use -2, -3, etc to return character before the previous negative number
// //
// //
// // // function last(input) {
// // //     return input.charAt(input.length-2);
// // // }
// // //
// // // console.log(last("Mykel"));
// //
// //
// // // Write a function called `rest(input)` that returns everything but the first character of a string. **************
// //
// // // function rest(input) {
// // //     return input.substring(1, input.length);
// // // }
// // //
// // // console.log(rest("CODEUP"));
// //
// // // Write a function called `reverse(input)` that takes a string and returns it reversed. **************
// // //*** accomplishes all three in one line. Broken down into three:
// // //
// // // function reverse(input) {
// // //     return input.split("").reverse().join("");
// // // //     var splitInput = input.split('');
// // // //     console.log('this is split: ', splitInput);
// // // //
// // // //     var reverseInput = splitInput.reverse();
// // // //     console.log('this is reverse: ', reverseInput);
// // // //
// // // //     var joinInput = reverseInput.join('');
// // // //     console.log('this is join:', joinInput);
// // // //
// // // //     return joinInput;
// // // }
// // //
// // // console.log(reverse("Kovar"));
// //
// //
// // // Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
// // // the function below does NOT work for numbers that are submitted as strings. ************ ************
// // //
// // // function isNumeric(input) {
// // //     if (isNaN(input) || input === true || input === false) {
// // //         return false;
// // //     }
// // //     return true;
// // // }
// // //
// // // console.log(isNumeric(false));
// // // console.log(isNumeric(26));
// // // // console.log(isNumeric(1));
// // // // console.log(isNumeric(1.5));
// // // // console.log(isNumeric("22"));
// // // // console.log(isNumeric(true));
// // // console.log(isNumeric('number'));
// // // console.log(isNumeric('123abc'));
// //
// // // console.log(isNumeric("abc123"));
// // // console.log(isNumeric("123abc"));
// // // console.log(isNumeric(10.5));
// // // console.log(isNumeric(Infinity));
// // // console.log(isNumeric(NaN));
// //
// //
// // // Write a function called `count(input)` that takes in a string and returns the number of characters. **************
// //
// // function count(input) {
// //     return input.length
// // }
// //
// //
// // // Write a function called `add(a, b)` that returns the sum of a and b *********************
// //
// // function add(a, b) {
// //     return (a + b);
// // }
// //
// //
// // // Write a function called `subtract(a, b)` that return the difference between the two inputs. ***********
// //
// // function subtract(a, b) {
// //     return (a - b);
// // }
// //
// //
// //
// // // // Write `multiply(a, b)` function that returns the product ************
// //
// // function multiply(a, b) {
// //     return (a * b);
// // }
// //
// // // console.log(multiply(10, 10));
// // // console.log(multiply(1, 10));
// // // console.log(multiply(5, 5));
// // //
// //
// // // Write a divide(numerator, denominator) function that returns a divided by b ************
// //
// // function divide(numerator, denominator) {
// //     return numerator / denominator;
// // }
// //
// // // console.log(divide(10, 10));
// // // console.log(divide(100, 10));
// // // console.log(divide(25, 5));
// //
// // // Write a remainder(number, divisor) function that returns the remainder left over when ************
// // // dividing `number` by the `divisor` ************
// //
// // function remainder(number, divisor) {
// //     return number % divisor;
// // }
// //
// // // console.log(remainder(2, 2));
// // // console.log(remainder(25, 3));
// // // console.log(remainder(100, 11));
// // // console.log(remainder(3, 25));
// // // console.log(remainder(12, 5));
// // // console.log(remainder(10000000, 17));
// //
// //
// // // Write the function `square(a)` that takes in a number and returns the number multiplied by itself. ************
// //
// // function square(a) {
// //     return a * a;
// // }
// //
// //
// // // # Super Duper Gold-Star Bonus
// // // Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// //
// // // attempts to re-factor are below:
// // //  return square(a,b), add(a,b);
// // //  return square(add(a,b));
// // // return multiply(add(a,b));
// //
// // function sumOfSquares(a, b) {
// //     // console.log(a, b);
// //     var squareA = square(a);
// //     // console.log('this is a^2:', squareA);
// //
// //     var squareB = square(b);
// //     // console.log('this is b^2: ', squareB);
// //
// //     return add(squareA, squareB);
// // }
// //
// //
// //
// //
// // // Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the ************
// // // name of the math function you want to apply. a and b are the two numbers to run that function on. ************
// //
// // function doMath(operator, a, b) {
// //     return operator(a,b);
// // }
// //
// // console.log(doMath(add, 2, 2));
// // // 4
// // console.log(doMath(multiply, 4, 4));
// // // 16
// // console.log(doMath(subtract, 2, 2));
// // // 0
// // console.log(doMath(sumOfSquares, 5, 2));
// // //29
// //
// //\
// //
// // //IIFE END
// // //
// // // })();