"use strict";

// create a for loop that multiplies a number var by a var X, until x = 2
// increase X each time the loop runs

// Loops - multiplication
// why do I have UNDEFINED as the last result? Is there
// function showMultiplicationTable(input) {
//     for (var i = 0; i <=10; i++) {
//         console.log(i + ' x ' + input + " = " + (input * i) );
//     }
// }

// console.log(showMultiplicationTable(2));


// console.log('7 x 1 = 7');
// console.log('7 x 2 = 14');
// 7 is the constant ,
// var input = 7;
// / var input = prompt("give me a number");
// wrtie a loop that goes from 1 to 10.
// for (var i = 0; i <= 10; i+=1) {
//         console.log(input+ 'x'+ (input * i));
//     }



// number 3 - even/odd. *********
// var randomNum = Math.floor((Math.random()*200)+1);
//
// console.log('this is the first number: ' + randomNum);
//
// for (var i = 1; i <= 10; i++) {
//     randomNum += 10;
//     if (randomNum % 2 === 0) {
//         console.log('even number: ' + randomNum);
//     }
//     if (randomNum % 2 !== 0) {
//         console.log('odd number: ' + randomNum);
//     }
//     // console.log(randomNum);
//     randomNum -= 1;
// }


// justin's approach:
// for loop that runs 10x.
// randomNum next,


// for (var i = 0; i <= 9; i++) {
//     // console.log(i);
//    var randomNum = Math.floor(Math.random() * (200 - 20 + 1 ) + 20);
//
//     var message = (randomNum % 2 === 0) ? randomNum + ' is even' : randomNum + ' is odd';
//     // // console.log(randomNum);
//     // if ( randomNum % 2 === 0) {
//     //     console.log(randomNum + ' is even');
//     // }
//     // if (randomNum % 2 !== 0) {
//     //     console.log(randomNum + ' is odd');
//     // }
//     console.log(message);
// }




// nested loop
// repeat feature

// number 4
//
//1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (var i = 1; i <=9; i++) {
//     // console.log(i);
//     var output ="";
//     for (var j = 1 ; j <= i; j += 1) {
//         output += i;
//     }
//     console.log(output);
// }


for (var i = 1; i <= 9; i++) {
    i = i.toString();
    console.log(i.repeat(i));
}

// repeat option, much shorter.
// for (var i = 1; i <=9; i++) {
//     var output = i + "";
//     console.log(output.repeat(i));
// }






//number 5.
//start with a number (100), then (decrease) by 5 until the number === 5.
//start with 100 as your number. decrease 100 by 5 until your number === 5;

// for (var x = 100; x >= 5; x -= 5) {
//     console.log(x);
// }


//---- practice 6/18 ----\\

//0-9 iterations
// var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i );
//     i++;
// }
//
// // 0-10 or only 10?
// var i = 0;
//
// do {
//     console.log('do-while loop iteration #' + i );
//     i++;
// } while (i < 10);

// 1 x 2 = 2
// 2 x 2 = 4
// 4 x 2 = 8
// 8 x 2 = 16
// 16 x 2 = 32
//powers of two
// var x = 2;
//
// while (x < 512) {
//     console.log('x^2 ' + x);
//     x = x * 2;
// }

// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration# ' + i);
// }

//can include multiple variables separated with a comma.

// for (var x = 100; x >= 5; x -= 5) {
//     console.log(x);
// }



// var randomNum = console.log(Math.floor(Math.random() * 10) + ' random number');
//
// // // this is evaluating i instead of the random number...
// // randomNum
// for (var i = 1; i <=10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' is EVEN');
//
//     } else {
//         console.log(i + ' is ODD');
//     }
// }



// for ( var i = 1; i>9; i++ ) {
//     for ( var y = 1; y <= i; y++) {
//         console.log(y + 'test');
//     }
//     console.log(y + 'second y');
// }

//
// var num = "";
// // var size = 9;
// for(var i=1; i<=9; i++) {
//     for (var y = 2; y <=9; y++) {
//         console.log(y + '');
//     }
//     i = y + i;
//     console.log(y + i);
// }
// var y = '';



// get help on this.
// for (var i = 1; i <=9; i++) {
//     console.log('BLOCK START ' + i);
// //    now y must be INCREMENTED by 1 starting at ONLY 2, and add the needed amount of digits before moving to 8 9's.
//     for ( var y = 2; y <=i; y+= 1) {
//
//         console.log('second ' + y);
//     }
//     // console.log(y + i);
// }

