"use strict";
    (function() {


        $(document).ready(function(){});

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
            $('.nameList').html('');
            people.forEach(function(person, index){

                $('#nameList').append('<li>' + person.name + '</li>');

            });

        }

        $('button').click(generateNameList);

















// ** IFFE END ** \\
    })();