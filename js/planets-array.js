(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    // ** part 1 ** \\
    //I can add an item to the beginning of an array by using arrayName.unshift('addition');
    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // console.log(planets);
    //
    planets.unshift('The Sun');
    // clog after to confirm change was made. DONE
    console.log(planets);

    // ** part 2 ** \\
    //I can add an item to the END of an array by using arrayName.push('addition');
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    planets.push('Pluto');
    //clog to confirm change was made. DONE.
    console.log(planets);


    // ** part 3 ** \\

    // I can remove items from an array by using pop and shift. Pop takes items away form the end, shift @ beginning
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    planets.shift();
    // clog to confirm change was made. DONE.
    console.log(planets);

    // ** part 4 ** \\

    //Can use pop to remove last item.
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    planets.pop();
    // clog to confirm change was made. DONE.
    console.log(planets);

    // ** part 5 ** \\
    // I can use clog.planets.indexOf('earth') to ID the index of earth within the array
    console.log('Finding and logging the index of "Earth" in the planets array.');
    //2
    console.log(planets.indexOf('Earth'));

    // ** part 6 ** \\
    //can use arrayName.reverse();
    console.log("Reversing the order of the planets array.");
    //DONE
    console.log(planets.reverse());



    // ** part 7 ** \\
    //use arrayName.sort(); to organize alphabetically
    console.log("Sorting the planets array.");
    //DONE
    console.log(planets.sort());


})();
