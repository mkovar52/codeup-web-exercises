const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsExp: 12,
        age: 27,
    },
    {
        id: 2,
        name: 'mykel',
        email: 'mykelkovar@gmail.com',
        languages: ['html', 'russian', 'javascript'],
        yearsExp: 7,
        age: 10,
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsExp: 1,
        age: 11,
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsExp: 22,
        age: 90,
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsExp: 9,
        age: 47,
    },
];

// console.log(users);
// console.log(users[0].languages);

// problem 1 - with curly braces \\

// let newUsers = users.filter( (obj) => {
//     // console.log(obj.languages);
//     return (obj.languages.length >= 3)
//         // return true;
// });

// problem 1 without curly braces or paren's around the parameter 'user' \\
let newUsers = users.filter( user => user.languages.length >= 3);

// console.log(newUsers);


// problem 2 same syntax as problem 1 \\
let userEmail = users.map( user => user.email);
    // console.log(obj.email);

// console.log(userEmail);

// problem 3 \\
// putting the curly braces is what helps initialize each item as an object...
// didn't even realize this was possible

    let newObject = users.reduce( (accumulation, currentObject) => {
        // console.log(currentObject);
         accumulation['object' + currentObject.id] = currentObject;
         return accumulation;

    }, {});

// prints the entire list
console.log(newObject);

// prints specific object being called
// best practice to not use numerical digits since we can't log #1?
// console.log(newObject.object2);

// let totalYearsExp = 0;
// users.forEach(function(user){
//     totalYearsExp += user.yearsExp;
// });

// console.log(totalYearsExp);
//51

let totalYrsExp = users.reduce( (total, user) => {
    total += user.yearsExp;
    return total;
}, 0);

console.log(totalYrsExp);