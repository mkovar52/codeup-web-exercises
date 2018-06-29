"use strict";


// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });



$('#playBtn').css('background-color', 'blue');

$('#playBtn').click(function() {

    $('#playOutput').text($('#playInput').val());
})

    //add event listener is replaced by on here.
    $('.important').on('mouseover', function() {
        $(this).css('background-color', 'yellow');

    })





