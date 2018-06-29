"use strict";


// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });



// $(function(){
    //
    // $('#playBtn').click(function() {
    // $('#playOutput').text($('#playInput').val());
    // });
    //
    // $('#playBtn').css('background-color', 'blue');

    //add event listener is replaced by on here.
    // $('.important').on('mouseover', function() {
    //     $(this).css('background-color', 'yellow');
    //
    // });

    // $('.mainContainer').css('font-family', 'helvetica');
    // $('#header').css('text-align', 'center');
    //
    // // alert($('#snowboard').text());
    // // alert($('#double').text());
    //
    // $('#double').click(function() {
    //     $('#playOutput').text($('#playInput').val());
    // });
    //
    // $('.codeup').css('border', '3px solid red');
    // $('p').css('width', '500px');
    //
    // // can chain as many as we need, like the li element below.
    // $('li').css('font-size', '20px').css('background-color', 'blue');
    // $('h1, p').css('background-color', 'yellow');
    // $('h3').css('text-align', 'center').css('background-color', 'aqua');
    //
    // alert($('h1').text());

    function changeH1Color () {
        $('h1').css('background-color', 'yellow');

    }

    $('h1').click(changeH1Color);

    function pClickChange() {
        $('p').css('font-size', '18px');
    }

    $('p').dblclick(pClickChange);

    // function listHoverColor() {
    //     $('li').css('color', 'red');
    // }, function () {
    //     $('li').css('color', 'black');
    // };
    //
    // $('li').hover(listHoverColor);

    $('li').hover(function(){
        $('li').css('color', 'red');

    }, function() {

        $('li').css('color', 'black');
    });


// })






