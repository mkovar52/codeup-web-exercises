console.log("Hello from EXTERNAL JavaScript!");

alert('Welcome to my website!');

var userFavColor = prompt("WHat is your favorite color?");
console.log('The user entered: ' + userFavColor);

alert('Great, ' + userFavColor + ' is my favorite color too!');

// when exercises asks to use a number, use a PROMPT to ask user
// Use ALERTS to show results of each problem

// (Renting Movies) Ex. 3, problem 1
// VARIABLES

var mermaidDaysRented = 3;
var bearDaysRented = 5;
var herculesDaysRented = 1;

var priceToRentPerDay = 3;

var costToRentMermaid;
var costToRentBear;
var costToRentHercules;

var totalCostForAllMovies;

prompt 
//ACTION

costToRentMermaid = (mermaidDaysRented * priceToRentPerDay);
costToRentBear = (bearDaysRented * priceToRentPerDay);
costToRentHercules = (herculesDaysRented * priceToRentPerDay);

totalCostForAllMovies = costToRentMermaid + costToRentBear + costToRentHercules;
console.log(totalCostForAllMovies);

alert('You will pay ' + totalCostForAllMovies + ' dollars to rent these films!');


// (Pay Rate) Ex.3, problem 2
// VARIABLES

var company1 = "Google";
var company2 = "Amazon";
var company3 = "Facebook";

var workHoursCompany1 = 6;
var workHoursCompany2 = 4;
var workHoursCompany3 = 10;

var payRateInDollarsCompany1 = 400;
var payRateInDollarsCompany2 = 380;
var payRateInDollarsCompany3 = 350;

var amountCollectedFromCompany1 = (workHoursCompany1 * payRateInDollarsCompany1);

var amountCollectedFromCompany2 = (workHoursCompany2 * payRateInDollarsCompany2);

var amountCollectedFromCompany3 = (workHoursCompany3 * payRateInDollarsCompany3);

var totalCheckAmountInDollars;

totalCheckAmountInDollars = (amountCollectedFromCompany1 + amountCollectedFromCompany2 + amountCollectedFromCompany3);
console.log(totalCheckAmountInDollars);

alert('You will make ' + totalCheckAmountInDollars + ' this month! \n Don\'t spend it all in one place!');