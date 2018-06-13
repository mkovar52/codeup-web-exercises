// console.log("Hello from EXTERNAL JavaScript!");
//
// alert('Welcome to my website!');
//
// var userFavColor = prompt("What is your favorite color?");
// console.log('The user entered: ' + userFavColor);
//
// alert('Great, ' + userFavColor + ' is my favorite color too!');

// // when exercises asks to use a number, use a PROMPT to ask user
// // Use ALERTS to show results of each problem
//
// // ****     ****       ****
// // // (Renting Movies) Ex. 3, problem 1
// // ****     ****       ****

        // VARIABLES
// ask for daily rental rate , and the rest of information as prompts. parseInt, convert strings to numbers.
// Use .toFixed to display values as a decimal. Another way to convert numbers. can also use "," after setting one
// var in order to reduce using var mutliple times!


// var mermaidDaysRented = 3;
// var bearDaysRented = 5;
// var herculesDaysRented = 1;
//
// var priceToRentPerDay = 3;
//
// var costToRentMermaid;
// var costToRentBear;
// var costToRentHercules;
//
// var totalCostForAllMovies;
//
// //ACTION
//
// costToRentMermaid = (mermaidDaysRented * priceToRentPerDay);
// costToRentBear = (bearDaysRented * priceToRentPerDay);
// costToRentHercules = (herculesDaysRented * priceToRentPerDay);
//
// totalCostForAllMovies = costToRentMermaid + costToRentBear + costToRentHercules;
// console.log(totalCostForAllMovies);
//
// alert('You will pay ' + totalCostForAllMovies + ' dollars to rent these films!');

// // ****     ****       ****
// // // (Pay Rate) Ex.3, problem 2
//    ****     ****       ****

        // VARIABLES

// var company1 = "Google";
// var company2 = "Amazon";
// var company3 = "Facebook";
//
// var userWorkHoursSubmittedForGoogle = prompt("How many hours did you work with " + company1 + " this week?");
// console.log(userWorkHoursSubmittedForGoogle + " hours this week for " + company1);
//
// var userWorkHoursSubmittedForAmazon = prompt("How many hours did you work with " + company2 + " this week?");
// console.log(userWorkHoursSubmittedForAmazon + " hours this week for " + company1 );
//
// var userWorkHoursSubmittedForFacebook = prompt("How many hours did you work with " + company3 + " this week?");
// console.log(userWorkHoursSubmittedForFacebook + " hours this week for " + company3);
//
// var hourlyPayRateInDollarsCompany1 = 400;
// var hourlyPayRateInDollarsCompany2 = 380;
// var hourlyPayRateInDollarsCompany3 = 350;
//
// var amountCollectedFromCompany1 = (userWorkHoursSubmittedForGoogle * hourlyPayRateInDollarsCompany1);
//
// var amountCollectedFromCompany2 = (userWorkHoursSubmittedForAmazon * hourlyPayRateInDollarsCompany2);
//
// var amountCollectedFromCompany3 = (userWorkHoursSubmittedForFacebook * hourlyPayRateInDollarsCompany3);
//
// var totalIncomeCollected;
//
// totalIncomeCollected = (amountCollectedFromCompany1 + amountCollectedFromCompany2 + amountCollectedFromCompany3);
// console.log(totalIncomeCollected);
//
// alert('You will make ' + totalIncomeCollected + ' this month! \n Don\'t spend it all in one place! :) ');


// ****     ****       ****
// (Student) Ex. 3, problem 3
// ****     ****       ****
// could use a confirm to help solve this
// canEnroll = classAvailSeats && classScheduleCheck; (set it undefined!) alert("sutdent is enrolled:" + enrollCheck);



// alert('Thanks for your interest in Intro to Russian Language! Before you\'re able to register for the class, you must first answer a few questions.');
//
// var classAvailableSeats = prompt('Does this class currently show seats are available? (Y/N)');
// console.log('there are seats available' + classAvailableSeats);
//
// var scheduleConflictCheck = prompt('Do you have other classes selected for this current time? (Y/N)');
// console.log('there are no time conflicts' + scheduleConflictCheck);
// var canEnroll;
//
// if (classAvailableSeats === 'Y' && scheduleConflictCheck === 'N') {
//     canEnroll = true;
//     alert('Welcome to the class! Please make sure to bring all materials the first day.');
// } else {
//     alert('Sorry! Maybe next semester!');
// };


// ****     ****       ****
// (Product Offer) Ex.3, problem 4
// ****     ****       ****

alert('Thanks for shopping at Costco online! Before we process your order, please take a moment to answer the following questions.');

//VARIABLES

var numberOfItemsPurchased;
var isPremiumMember;
var offerExpirationYear;
var discountApplied;

// ACTION

var isPremiumMember = prompt("Do you have a Premium Member Subscription? (Y/N)");
console.log("customer is a premium member" + isPremiumMember);

var numberOfItemsPurchased = prompt("How many items are you purchasing?");
console.log("customer purchased:" + numberOfItemsPurchased);

var offerExpirationYear = prompt("In what year does your coupon expire?\nPlease select only one: 2016, 2017, or 2018");
console.log('offer expires in ' + offerExpirationYear );

if (isPremiumMember === 'Y' || numberOfItemsPurchased >= 3 && offerExpirationYear > 2016) {
    discountApplied = true;
    alert('Congratulations! A discount will be applied to your order!');
} else {
    alert('Thanks for your order! Come back and see us again soon!');
};