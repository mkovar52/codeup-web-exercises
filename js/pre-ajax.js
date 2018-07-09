$(document).ready(function() {
    //can use this instead of an IFFE
    "use strict";

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    function generateNameList() {
        $('#nameList').html('');
        
        people.forEach(function (person) {

            $('#nameList').append('<li>' + person.name + '</li>');

        });

    }

    $('button').click(generateNameList);



//










// ** DOC END ** \\
});

