// BONUSES 1:
// Write a program to toggle all characters in a string:
//    in a given string, toggle all characters to their opposite case. Special characters will not change.
// Example input: "aBc12#""
// Example output: "AbC12#"

// var usernameString = "milleHOpE11mykelKOVARnalaKOOVAR#";
//
// function toggleStrUsername(chars) {
//
//     var usernameArr = usernameString.split("");
//     console.log('user name before changes: \n' + usernameArr);
//     var usernameReformattedStr;
//
//     for (var i = 0; i < usernameArr.length; i+= 1) {
//         if (usernameArr[i] === usernameArr[i].toLowerCase()) {
//            usernameArr[i] = usernameArr[i].toUpperCase();
//            // console.log('upper-case change: \n' + usernameArr);
//         } else if (usernameArr[i] === usernameArr[i].toUpperCase()) {
//             usernameArr[i] = usernameArr[i].toLowerCase();
//         }
//         // console.log('username after changes change \n' + usernameArr);
//         usernameReformattedStr = usernameArr.join("");
//     }
//     //join array back together here
//     console.log(usernameReformattedStr);
// }
//
// //sends the usernameString
// toggleStrUsername(usernameString);





// phone number example. can try the same thing
// var phoneNumbers = '210-555-5555 \n 210-777-5555 \n 210-888-5555';
//
// function cleanNumbers(phoneNums) {
//     var phoneNumsArr = phoneNums.split("\n");
//     var cleanNumsArr = [];
//
//     console.log(phoneNumsArr);
//
//     phoneNumsArr.forEach(function(phoneNum) {
//         //formatted version
//         var formattedPhoneNum = phoneNum.split("-").join("");
//         cleanNumsArr.push(formattedPhoneNum);
//     });
//     return cleanNumsArr;
// }
//
// // didn't have cleanNumsArr var called outside the function I had just created.
// var cleanNumsArr = cleanNumbers(phoneNumbers);
//
// for (var i = 0; i < cleanNumsArr.length; i += 1) {
//     console.log(cleanNumsArr[i]);
// }


//index of !== toLowerCase??

// BONUS 2:
// Write a program that takes a given string appended with a number at the end.
// The program will check the length of the string to verify the string is equal to the number appended.
// If the number appended equals the string length, output "Yes".
// if the number appended does not equal the string length, output "No".

// Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"

// this takes in two values.. try creating a program that takes only one, and then removes the number and compares it to
//number appended.

// function strCheck(input1, input2) {
//     if (input1.length === input2) {
//         return 'Yes';
//     } else {
//         return 'No';
//     }
//
// }

// console.log(strCheck("Mykel", 0));
// // No

//create a function that will take 1 input.
// the last character of the string will ALWAYS be a number, so I can separate it from the given input
//then compare the length of the newString vs. the number
//The way I choose to solve this with reverse causes double-digit numbers to break it.
//ASK on a way to address this issue.


function strCheck(input) {

    // console.log('this is input ' + input);

    var inputArray = input.split('');
    var inputRev = inputArray.reverse();
    console.log('inputSplit rev = ' + inputRev);

    if (parseInt(inputRev) == (input.length-1)) {
        return 'yes';
    } else {
        return 'no';
    }
}

console.log(strCheck("Mykel5"));
//yes
// console.log(strCheck("M11"));
// //no
//
// console.log(strCheck("Mykel7"));
// //No
//
// console.log(strCheck("HopE4"));
// //yes
//
// console.log(strCheck("mykelmyke9"));
// //yes
//
// console.log(strCheck("mykelmykelmykelmykel20"));
//yes, but the zero reversed is throwing it off.




