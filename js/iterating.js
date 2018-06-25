(function(){
    "use strict";

    // var studentNames = ['Mykel', 'Frank', 'Joseph', 'Dennis', 'Millie', 'Milagro', 'Malibu'];
    //
    // // function greet(input) {
    // //     var greeting = 'Hello! ' + input + ' it\'s nice to meet you!';
    // //     console.log(greeting);
    // // }
    // //
    // // studentNames.forEach(greet);
    //
    // studentNames.forEach(function(input) {
    //     var greeting = 'Hello! ' + input + ' it\'s nice to meet you!';
    //     console.log(greeting);
    // });

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
// var names = ['Mykel', 'Malibu', 'Millie', 'Dennis'];




    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // console.log(names.length);


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);
    //

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // for (var i = 0; i < names.length; i++) {
    //     console.log(names[i]);
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    //
    // names.forEach(
    //     function(name) {
    //     console.log('Hello, my name is: ' + name + '.');
    // });

    /**
     * TODO:
     * Create the following THREE functions, EACH will accept an ARRAY and
     * return an element from it
     * - first: returns the first item in the array
     *
     * - second: returns the second item in the array
     *
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
//     function one - return first item in an array
//     var numbers = [1, 2, 3, 4, 5];

//     function returnFirstItem(input) {
//         return numbers[0];
//     }
//
//     function returnSecondItem(input) {
//         return numbers[1];
//     }
//
//     // what if I didn't know the number of items in the array? array.length-1?
//     // included the -1 here, but it actually pulls up number 4. Why?
        //         could have potentially 'removed item without knowing it...
//     //
//     function returnLastItem(input) {
//         return numbers.length-2;
//     }
//
// console.log(returnFirstItem(numbers));
// console.log(returnSecondItem(numbers));
// console.log(returnLastItem(numbers));


 // ********    END OF ITERATING LESSON ******** \\\\\
/// ** Manipulation with Arrays BELOW  DONE ON 6/19/18 *** \\\\

    // var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    //
    // console.log(daysOfTheWeek);
    //
    // daysOfTheWeek.unshift('Sunday');
    // daysOfTheWeek.push('Friday', 'Saturday');
    // console.log(daysOfTheWeek.length);
    //
    // console.log(daysOfTheWeek.indexOf('Wednesday'));

    var langs = ['Javascript', 'CSS', 'HTML', 'Java'];

    // console.log('I have already learned ' + langs[1]);
    // console.log('But have NOT seen ' + langs[3] + ' yet.');

    // //unshift goes to the beginning
    // langs.unshift('Groovy');
    // console.log(langs);

    // //Groovy now becomes the index of 0.
    // //size of the array - 1. 5 langs, but access the last by calling 4.
    // console.log(langs[0]);

    // langs.push('PHP');
    // console.log(langs);

    // // langs.shift();
    // langs.shift();
    // // langs.pop();

    // //position 0 of array is being replaced with new value on the right
    // langs[0] = 'SCSS';

    // this user entered value IS NOT permanently stored
    // langs.push(prompt('What is your favorite programming language?'));
    //index's are dynamic and move around , so don't rely on them to

    // console.log('index of HTML is: ' + langs.indexOf('HTML'));

    //forEach and annonym function need to be used together??
    //not using this again, so it's ok to be an annoymn. function.
    //better to read and remember what this function is accepting
    //index is predefined and how it logs the indexes associated with the array items.
    // langs.forEach(function(lang, index) {
    //     console.log('I will learn: ' + lang + ' index ' + index);
    // });


//    pop deletes last item, shift deletes first
// last available index you used








})();

