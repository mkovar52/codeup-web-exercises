// /*
//  * Complete the TODO items below
//  */
// const users = [
//   {
//     name: 'zach',
//     email: 'zach@codeup.com',
//     languages: ['javascript', 'bash']
//   },
//   {
//     name: 'ryan',
//     email: 'ryan@codeup.com',
//     languages: ['clojure', 'javascript']
//   },
//   {
//     name: 'luis',
//     email: 'luis@codeup.com',
//     languages: ['java', 'scala', 'php']
//   },
//   {
//     name: 'fernando',
//     email: 'fernando@codeup.com',
//     languages: ['java', 'php', 'sql']
//   },
//   {
//     name: 'justin',
//     email: 'justin@codeup.com',
//     languages: ['html', 'css', 'javascript', 'php']
//   }
// ];
//
// // TODO: fill in your name and email and add some programming languages you know
// // to the languages array
// // TODO: replace the `var` keyword with `const`, then try to reassign a variable
// // declared as `const`
// const name = 'Mykel';
// const email = 'mykelkovar@gmail.com';
// const languages = ['HTML', 'CSS', 'JavaScript'];
//
//
// // TODO: rewrite the object literal using object property shorthand
//
// users.push({
//   name,
//   email,
//   languages
// });
//
// // TODO: replace `var` with `let` in the following variable declarations
// const emails = [];
// const names = [];
//
// // TODO: rewrite the following using arrow functions
//
// users.forEach((user) => {
//     return emails.push(user.email);
// });
//
// // users.forEach(function(user) {
// //   return emails.push(user.email);
// // });
//
// // is this correct? \\
// // const users = (user) => emails.push(user.email);
//
//
// // users.forEach(function(user) {
// //   return names.push(user.name);
// // });
//
// // is this correct? \\
// // const users = (user) => names.push(user.name);
//
//
//
// // TODO: replace `var` with `let` in the following declaration
// let developers = [];
// users.forEach((user) => {
//   // TODO: rewrite the code below to use object destructuring assignment
//   //       note that you can also use destructuring assignment in the function
//   //       parameter definition
//   // const name = name;
//   // const email = email;
//   // const languages = languages;
//
//
// const {name, email, languages} = user;
// console.log(email)
//     // TODO: rewrite the assignment below to use template strings
//     //   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// // });
// // developers.push(`${name}'s email is ${email}  ${name} knows ${languages.join(', ')}`);
// });
//
//
// // TODO: Use `let` for the following variable
// let list = '<ul>';
//
//
// // TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//   // TODO: rewrite the assignment below to use template strings
//
// });
// // list += '</ul>';
//
//
// for (let developer of developers) {
//     list += '<li>' + developer + '</li>';
// }
//
// list += '</ul>';
// document.getElementById("list").innerHTML =list;
//
//
// // list += ` <li> ${developer} </li>`;
//old way
// var ninjaGreeting = function (){
//     console.log('hiiiiyaaaa');
// }
//
// ninjaGreeting();

//es6 syntax:
// also able to omit curly braces if only 1 argument is passed through.
// let ninjaGreeting = name => console.log(`${name} says hiiiyaaa es6`);
//
// ninjaGreeting("Mykel");

//object creation and including an arrow function inside of it below:
let ninja = {
    name: "Ryu",
    chop(x){
        window.setInterval(() => {
            if (x > 0){
                console.log(this.name + " CHOPPED THE ENEMY!");
                x--;
            }
        }, 1000);
    }
};
// ninja.chop(5);

// 7-13 class examples
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// let evens = [];
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evens.push(numbers[i]);
//     }
// }
// console.log(evens);
// console.log(numbers);

// let evens = numbers.filter( n => n % 2 === 0);
// console.log('even numbers: ' , evens);

let odds = numbers.filter( n => n % 2 !== 0);
// console.log('odd numbers: ' , odds);

// works the exact same way as line 159
let evens = numbers.filter( (n) => {
 return n % 2 === 0;
});

// console.log('even numbers: ', evens);

// map actually modifies the values
let incremented = evens.map( (n) => n+2 );
console.log('incremented by 2: ', incremented);


// let sum = 0;
// let name = "";
// let single = false;
// used for more complex operations with the 0 parameter set by the reduce. needs to know where. most of the time
// makes sense to start with empty or zero, but sometimes might need to play with how we want to initialize it
// doesn't return an array - only 1 number.
let sum = evens.reduce( (accumulation, currentNum) => accumulation + currentNum , 0);
console.log('the sum is: ', sum);