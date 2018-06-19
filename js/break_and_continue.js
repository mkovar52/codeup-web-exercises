"use strict";
//
// var i = 1;
//
// while (i < 10) {
//     console.log(i);
//     if (i === 9) {
//         console.log('about to break');
//         break;
//         // console.log('break out'); you NEVER get to this statement. Much like return, the loop is done.
//     }
//     i++;
// }
// console.log('all done');

// var i = 0;
//
// while (i < 10) {
//     i++;
//     if (i === 5) {
//         i++;
//         continue;
//     }
//     console.log(i);
//
// }
// console.log('all done');



// if randomNum is NOT odd, , break the loop once you hit an odd number.
//odd number can be represented by 2n + 1, because 2 times any num + 1 will be odd.
// can also check this way: randomNum % === 0


// while (randomNum <= 52) {
//     console.log(randomNum);
//     if (randomNum % 2 === 0) {
//         continue;
//         randomNum++;
//     } else {
//         break;
//     }
//     // randomNum++;
//     console.log(randomNum);
// }
//
// var randomNum = Math.floor((Math.random()*50)+1);
// console.log('random num to skip: ' + randomNum);
//
// for (var i = 1; i < 75; i++) {
//
//     if (i % 2 === 0){
//         //skipping even numbers
//         continue;
//     }
//     if (randomNum === i) {
//         console.log('SKIPPPP: ' + i);
//     } else {
//         console.log('here is an odd num: ' + i);
//     }
//
//     if (i >= 49) {
//         break;
//     }
// }




// while (true) {
//     var userNum = prompt('Enter an odd number between 1 and 50');
//
//     if (userNum % 2 !== 0 && userNum <= 50 && userNum >= 1) {
//        break;
//         }
// }
// console.log(userNum);
//
// console.log('number to SKIP:' + userNum);
//
// for (var i = 1; i <=50; i+= 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     if (i !== parseInt(userNum)) {
//         console.log('here is off num: ' + i);
//     } else {
//         //only reason userNum shows here is b/c of the clog.
//         console.log('Yikes! SKIPPPP THIS: ' + userNum);
//     }
// }

// var sanAntonio = "San Antonio";
// var austin = "Austin";
// var dallas = "Dallas";
// var houston = "Houston";
// var texasCities = [sanAntonio, austin, dallas, houston];
//
// for ( var i = 0; i < texasCities.length; i++) {
//     console.log(texasCities[i]);
// }


