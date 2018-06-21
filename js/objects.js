(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

//    make sure I understand how to use the "this" keyword correctly.**
// var person = {
//         firstName: "Mykel",
//         lastName: "Kovar",
//         sayHello: function() {
//             // console.log('Hello from' this.firstName + this.lastName );
//         }
//     };
//
//     console.log(person.firstName);
//     console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //returns 'undefined' when using with console.log. removing console.log got rid of the undefined....why??
    // person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount.
     *
     * Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay.
     *
     * We know that Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

// ARRAY with objects inside of it.
    var shoppers = [
        //shopper 1 @ 0 index
        {name: 'Cameron', amount: 180},

        //shopper2 @ 1 index
        {name: 'Ryan', amount: 250},

        //shopper 3 @ index 2
        {name: 'George', amount: 320}
    ];


function hebDiscountCheck() {

    for (var i = 0; i < shoppers.length; i += 1) {
        if (shoppers[i].amount > 200) {
            console.log(shoppers[i].name + ' You earned 12% off!');
            console.log('Your new total is ' + shoppers[i].amount * .88);
        }
        else {
            console.log('Hello, ' + shoppers[i].name + '! Your order total is' + shoppers[i].amount);
        }
    }
}

// hebDiscountCheck(shoppers);

//   **** USING .forEach(function( ) approach:

//     shoppers.forEach(function(shopper) {
//         // console.log(shopper.name);
//         var discountPercent = .88;
//
//             if (shopper.amount > 200) {
//                console.log('Congrats! You get a 12% discount, ' + shopper.name);
//                console.log('You now owe: ' + shopper.amount * discountPercent);
//             } else {
//                 console.log('Thanks for shopping at HEB, ' + shopper.name + '! Your order total is: ' + shopper.amount.toFixed(2));
//             }
//     });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`.
     *
     * Each object should have a title and an author property.
     *
     * The author property should be an object with properties:
     * `firstName` and `lastName`.
     *
     * Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: "Xfactor Biography", author:{firstName:"Mykel",lastName: 'Kovar'}},
        {title: "Gone With The Wind", author:{firstName: "Malibu", lastName: "Hart"}},
        {title: "Sports Illustrated", author:{firstName: "Nala", lastName: "Kovar"}},
        {title: "Good vs. Evil", author:{firstName:"Donald" , lastName: "Duck"}},
        {title: "How To: Snowboard", author:{firstName: "Shaun", lastName: "White"}}
    ];

// console.log(books[2].author.firstName);
// console.log(books[0].author.lastName);
// console.log(books[4].title);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

// function bookCheck() {
//     for (var i = 0; i < books.length; i += 1) {
//         //the i + 1 because list starts at 0!
//         console.log('Book # ' + (i+1));
//         console.log('Title: ' + books[i].title);
//         //didn't concatenate the i
//         console.log('Author: ' + books[i].author.firstName + " " + books[i].author.lastName);
//         console.log('----');
//         console.log('...');
//     }
// }
//
// bookCheck(books);

    // .forEach is alternative method to for loop
    //
    // books.forEach(function (book, i) {
    //     console.log('Book # ' + (i+1));
    //     console.log('Title: ' + books[i].title);
    //     //didn't concatenate the i
    //     console.log('Author: ' + books[i].author.firstName + " " + books[i].author.lastName);
    //     console.log('----');
    //     console.log('...');
    // });


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var random = getRandomInt(1, 27);
    console.log(random);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described previously.
     *
     *   Refactor your code that creates the books array to instead use your function.
     *   Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //create an array that accepts title and author name.
        /* doing it this way added each individual item as part of the list, but was able to see it within the array.
       they actually show up as 'null' values.
         */

//     var bookTitle = books.push(prompt('What\'s the book title you\'d like to add?'));
//     var authorFirstName = books.firstName(prompt('What is the author\'s first name?'));
//     var authorLastName = books.lastName(prompt('What is the author\'s last name?'));
//
//     console.log(bookTitle);
//     console.log(authorFirstName);
//     console.log(authorLastName);
// console.log(books);

    // function createBook(inputTitle, inputFname, inputLname) {
    //     var inputTitle =
    //
    // }




})();
