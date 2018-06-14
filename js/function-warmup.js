// wamrup with functions 6/14/18 instructions:
// 4. makeUsername() should return a username string consisting of the length of the firstName, combined with
// the first letter of the firstName in lowercase, combined with the age value
// Example 1:
// makeUsername("John", 20); // output = '4j20'
// Example 2:
// makeUsername("Sandy", 25); // output = '5s25'
// 5. Add and commit your function, push up your branch to your remote repo
// git add .
//     git commit -m 'Some message'
// git push origin function-practice
// 6. Checkout back to your master branch
// git checkout master

// ** IIFE START ** \\



(function () {

    // ** IIFE START ** \\


function makeUsername (firstName, age) {
    return firstName.length + firstName.charAt(0).toLowerCase() + age;
}

console.log(makeUsername("frank", 30));
// console.log(makeUsername("mykel", 27));
// console.log(makeUsername("tom", 12));
// console.log(makeUsername("Sandy", 25));







// ** IIFE END ** \\\

})();
// ** IIFE END ** \\