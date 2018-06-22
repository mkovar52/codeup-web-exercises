// BONUSES 1:
// Write a program to toggle all characters in a string:
//    in a given string, toggle all characters to their opposite case. Special characters will not change.
// Example input: "aBc12#""
// Example output: "AbC12#"



var usernameString = "milleHOpE11mykelKOVARnalaKOOVAR#";

function toggleStrUsername(chars) {

    var usernameArr = usernameString.split("");
    console.log('user name before changes: \n' + usernameArr);
    var usernameReformattedStr;

    for (var i = 0; i < usernameArr.length; i+= 1) {
        if (usernameArr[i] === usernameArr[i].toLowerCase()) {
           usernameArr[i] = usernameArr[i].toUpperCase();
           // console.log('upper-case change: \n' + usernameArr);
        } else if (usernameArr[i] === usernameArr[i].toUpperCase()) {
            usernameArr[i] = usernameArr[i].toLowerCase();
        }
        // console.log('username after changes change \n' + usernameArr);
        usernameReformattedStr = usernameArr.join("");
    }
    //join array back together here
    console.log(usernameReformattedStr);
}

//sends the usernameString
toggleStrUsername(usernameString);



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