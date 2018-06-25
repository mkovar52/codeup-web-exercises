

// var paintball = 'Paintball';
// var football = 'Football';
// var baseball = 'Baseball';
// var running = 'Running';
// var favSports = [paintball, football, baseball, running];
//
//
// for (var i = 0; i < favSports.length; i++) {
//     console.log(favSports[i]);
// }

// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// shapes.forEach(function(shape) {
//     console.log('Here is a lovely shape: ' + shape + '.');
// });


//
// var pies = [
//     'apple',
//     'cherry',
//     'key lime',
//     'huckleberry',
//     'rhubarb'
// ];


// for (var i = 0; i < pies.length; i +=1) {
//     console.log(pies[i]);
// }


//other method to call list. One advantage to using this method is that you don't have to use brackets or the for loop.
// the parameters inside the function come with (element, index, array)

// pies.forEach(function(pie, index) {
//     console.log(pie, index);
// });

// pies.shift();
// console.log(pies);


// console.log(pies);

// function recentlyBakedPies(arr) {
//   var pieSlice = arr.slice(arr.length - 3);
//     console.log(pieSlice);
// }
//
// recentlyBakedPies(pies);

//once you sort a list, you CHANGE the original version of it. Changes cannot be reverted.
// You can customize sort to an array but this requires additional work.

var phoneNumbers = '210-555-5555 \n 210-777-5555 \n 210-888-5555';

function cleanNumbers(phoneNums) {
    var phoneNumsArr = phoneNums.split("\n");
    var cleanNumsArr = [];

    console.log(phoneNumsArr);

    phoneNumsArr.forEach(function(phoneNum) {
        //formatted version where split removes the - and join'' pushes each number together.
        var formattedPhoneNum = phoneNum.split("-").join("");
        cleanNumsArr.push(formattedPhoneNum);
    });
    return cleanNumsArr;
}

// didn't have cleanNumsArr var called outside the function I had just created.
var cleanNumsArr = cleanNumbers(phoneNumbers);

for (var i = 0; i < cleanNumsArr.length; i += 1) {
    console.log(cleanNumsArr[i]);
}
