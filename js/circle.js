(function() {
    "use strict";


    var circle = {
        radius: 3,

        getArea: function () {
            return Math.PI * Math.pow(this.radius, 2);
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            /* why is it important or needed to include this var?
            to be called in the console log? */
            //var area = this.getArea();

            var round;
            // if testing for true/false, only need below, doesn't require === true/false.
            //refactor with ternary operator:
            if (doRounding) {
                round = Math.round(this.getArea());
            } else {
                round = this.getArea();
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + round);
        }
    };


    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);
    //
    // console.log("=======================================================");
    // // TODO: Change the radius of the circle to 5.

    // // circle.radius = 5;


    // // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);


// *** MATH OBJECT BONUS *** \\
//  Create an application that will calculate the total volume of a building based on user input
//  Account for multiple rooms and a user specified unit of measurement

//     VOLUME = length x width x height
//     {title: "Xfactor Biography", author:{firstName:"Mykel",lastName: 'Kovar'}},
var building = { roomName: "Living Room", specs:{length: , width: , height:  },





})();



