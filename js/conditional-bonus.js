"use strict";

//Bonus 1
// Create a function that prompts a user for their favorite day of the week
// AND alerts a unique message based on the day.
// - Catch any INVALID inputs.
// - Write the logic using if/else ifs and then refactor using a switch case

// var userInput = prompt('what day do you like?');
// userFavDay(userInput);


// could also set each day message to it's own variable
// function userFavDay(dayOfWeek) {

//     if (dayOfWeek === 'Monday') {
//         alert(dayOfWeek + 'said no one ever..');
//
//     } else if (dayOfWeek === 'Tuesday') {
//         alert('getting warmer');
//
//     } else if (dayOfWeek === 'Wednesday') {
//         alert('getting warmer STILL');
//
//     } else if (dayOfWeek === 'Thursday') {
//         alert('gettiNG WAARM');
//
//     } else if (dayOfWeek === 'Friday') {
//         alert('FRIDAY');
//
//     } else if (dayOfWeek === 'Saturday') {
//         alert('SATURDAY is here');
//
//     } else if (dayOfWeek === 'Sunday') {
//         alert('sunday funday!');
//
//     } else {
//         alert('INVALID ENTRY: please enter with proper grammar; Monday, Tuesday, or Wednesday, etc');
//     }
// }

// SWITCH case for the same problem:
// console.log(userInput);
// switch(userInput) {
//     case "Monday":
//         alert(" said no one ever..");
//         break;
//     case "Tuesday":
//         alert(' Getting warm');
//         break;
//     case "Wednesday":
//         alert(" Getting warmer, it's Hump-Day!");
//         break;
//     case "Thursday":
//         alert(" Almost weekend time!");
//         break;
//     case "Friday":
//         alert(" Friday night and feeling alright!");
//         break;
//     case "Saturday":
//         alert(" Saturday is great.");
//         break;
//     case "Sunday":
//         alert(" Sunday FUNDAY");
//         break;
//     default:
//         alert(" INVALID ENTRY. Please submit day in proper format: (Monday, Tuesday, Wednesday)")
// }

// ****** \\

// Bonus 2
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
// - refactor to use a ternary operator

// var userInput = prompt('Please submit a number');
// //passes the input to the function analyzeNumber
// analyzeNumber(userInput);
//
// function analyzeNumber(input) {
//
//     //ternary operator version:
//     (isNaN(input)) ? alert('INVALID ENTRY') : alert(input + ' is my favorite number! ');
//
//     // if/else version:
//     // if (isNaN(input)) {
//     //     alert('INVALID ENTRY. Please choose a numeric value.');
//     // } else {
//     //     alert(input+ ' is your favorite number too?');
//     // }
//
// }

// ****** \\


// Bonus 3
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). XX
// The function then alerts the months available in that season and then asks the user to pick a given month.
// After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months

var userInput = prompt('Please enter your favorite season.');
analyzeSeason(userInput);

function analyzeSeason(input) {


    if (input === 'Spring' || input === 'spring') {
        alert('Spring includes: April, May, June');
      var userSelectedMonth = prompt('Please now select a month: (April, May, or June)');
    }
    // else if (input === 'Summer' || input === 'summer') {
    //     alert('Summer includes: July, August, September');
    //
    // } else if (input === 'Fall' || input === 'Autumn') {
    //     alert('Fall includes: Janurary, Febraury and March ');
    //
    // } else if (input === 'Winter' || input === 'winter') {
    //     alert('Winter includes: ');
    // }

    // SPRING MONTHS
    // if (userSelectedMonth === 'June' || userSelectedMonth === 'june') {
    //     alert('My Bday is in June!');
    // }
    switch(userSelectedMonth) {
        case 'April' || 'april':
            alert('April showers bring May flowers');
            break;
        case 'May' || 'may':
            alert('May is hot in Texas.');
            break;
        case 'June' || 'june':
            alert('My Bday is in June!');
            break;
        default:
            alert('INVALID ENTRY FOR SPRING');
    }


}