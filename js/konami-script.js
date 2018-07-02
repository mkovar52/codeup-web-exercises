"use strict";
        (function() {

        // Konami Code Sequence & Keys
        var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
        var konamiCodePosition = 0;

        //Konami Code Check
        $(document).keyup(function(e){
            var key = e.key;
            var requiredKey = konamiCode[konamiCodePosition];

            if (key == requiredKey) {
                konamiCodePosition += 1;

                if (konamiCodePosition == konamiCode.length) {
                    activateCheat();
                    konamiCodePosition = 0;
                }
            }

        });

        //Hidden tRexGif, triggered once correct code is entered
        $('.tRexGif').hide();

        // Cheat code activation triggers
        function activateCheat() {
            $('*').css('background-color', '#228B22');
            $('#trexRoar').trigger('play');
            $('.tRexGif').show();
        }



    })();
