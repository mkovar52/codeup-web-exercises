

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

//function that accepts a gitHub username and fetches PushEvents information, also adding it to the html doc itself.
const githubUserLastPush = (user) => {
    fetch("https://api.github.com/users/" + user + "/events", {headers: {"Authorization": "token c5383de178d5e32da49b5b7020caa76381b13559"}})
        .then(response => response.json())
        .then(data => {
            console.log(data[0]);
            document.getElementById('lastPushInfo').innerHTML = data[0].created_at;
            document.getElementById('additionalUserInfo').innerHTML = `<li>User Id: ${data[0].id}</li>`;
            document.getElementById('additionalUserInfo').innerHTML += `<li>Username: ${data[0].actor.display_login}</li>`;
            document.getElementById('additionalUserInfo').innerHTML += `<li>Repo URL: ${data[0].repo.name}</li>`;
        });
    };

//call that passes function username
githubUserLastPush("mkovar52");

//function that accepts username
//const token
//const url
// return fetch url

//function to pass in username
//then data => data.json
//then events => events.filter(event => event.type == 'PushEvent))
//then data => console.log(data);
