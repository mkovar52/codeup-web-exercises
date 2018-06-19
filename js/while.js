"use strict";

// create a loop that console.logs the SUM of x plus itself until it reaches 65,536

// var x = 2;
//
// while (x <= 65536) {
//     console.log(x);
//     x = x + x;
// }
// Fer's Approach:
//     res
// 1 = 1 x 2;
// 2 = 2 x 2;
// 4 = 4 x 2;
// 8 = 4 x 4;

// Fer's Approach
// var res = 1;
//
// while ( res  <= 65536){
//     console.log('res ', res);
//     res = res *2;
// }



// DO-WHILE loop

// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// // // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
//
// // Fer's approach:
// //good idea to track the variables with clog.
// do {
//     console.log("I have " + allCones + "left to sell" );
//     var conesToSell = Math.floor(Math.random() * 7) + 1;
//
//     if (conesToSell <= allCones) {
//
//         console.log("I sold" + conesToSell);
//         allCones = allCones - conesToSell;
//     } else if (allCones === 0) {
//         console.log('I can go home.');
//     }
//         else {
//         console.log('I don\'t have ' +conesToSell+ 'cones to sell');
//     }
//
// } while(allCones !== 0);