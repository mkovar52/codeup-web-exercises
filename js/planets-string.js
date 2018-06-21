(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    //check results of part 1
    console.log(planetsArray);

    //Bonus 1
    //why is it useful to add <br> tags? to then cut them out from the list? did they mean \n????
    //format correctly in HTML with Javascript. Then puts the string The string also respects the br tags.
    var strPlanets = planetsArray.join("<br>");
    console.log(strPlanets);



    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

var planetsHTML = '<ul><li>';
planetsHTML += planetsArray.join('</li><li>');
planetsHTML += '</li></ul>';
console.log(planetsHTML);

// do this with a .forEach function as extra practice.
//covered in DOM of the curriculmn. also build it out and visulaze what you need

document.body.innerHTML = planetsHTML;

})();
