

//es5 syntax:
// function wait(num) {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res();
//         }, num);
//     });
// }

//es6 syntax:
const wait = num => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};

// wait(1000).then(() => console.log('I am the message after one second'));
// wait(3000).then(() => console.log('I am the message after three seconds'));




const githubUserLastPush = (user) => {
    fetch("https://api.github.com/users/" + user + "/events", {headers: {"Authorization": "token c5383de178d5e32da49b5b7020caa76381b13559"}})
        .then(response => response.json())
        .then(data => console.log(data[0]));
};

// githubUserLastPush("mkovar52");


