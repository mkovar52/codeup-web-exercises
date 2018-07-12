"use strict";

    // =================================     ** global vars  **    ========================================= \\

    var lat = 29.42;
    var lng = -98.49;

// =================================     ** function for AJAX updates **      ================================= \\
    function updateWeatherCardInfo(lat, lng){
        $.get("http://api.openweathermap.org/data/2.5/forecast?appid=e12d834255482e959a94744605064c71&units=imperial&lat="
            + lat + "&lon=" + lng).done(function(data){
            console.log(data);
            $('#city-name').html(data.city.name);

            //refactor building cards by using a loop of some kind. DRY:(
            //weather card info for day 1
            $('#high-low-temp1').html("<p>High & Low: " + roundTemperatures(data.list[0].main.temp_max)+ "&#8457 / "+ roundTemperatures(data.list[0].main.temp_min) + "&#8457</p>");
            $('#current-temp1').html("<p>Currently: " + roundTemperatures(data.list[0].main.temp) + "&#8457</p>");
            $('#humidity1').html("<p>Humidity: " + data.list[0].main.humidity + "%</p>");
            $('#windspeed1').html("<p>Wind Speed: " + data.list[0].wind.speed + "mph</p>");

            //weather card info for day 2
            $('#high-low-temp2').html("<p>High & Low: " + roundTemperatures(data.list[8].main.temp_max) + "&#8457 / "+ roundTemperatures(data.list[8].main.temp_min) + "&#8457</p>");
            $('#current-temp2').html("<p>Currently: " + roundTemperatures(data.list[8].main.temp) + "&#8457</p>");
            $('#humidity2').html("<p>Humidity: " + data.list[8].main.humidity + "%</p>");
            $('#windspeed2').html("<p>Wind Speed: " + data.list[8].wind.speed + "mph</p>");

            //weather card info for day 3
            $('#high-low-temp3').html("<p>High & Low: " + roundTemperatures(data.list[16].main.temp_max) + "&#8457 / "+ roundTemperatures(data.list[16].main.temp_min) + "&#8457</p>");
            $('#current-temp3').html("<p>Currently: " + roundTemperatures(data.list[16].main.temp) + "&#8457</p>");
            $('#humidity3').html("<p>Humidity: " + data.list[16].main.humidity + "%</p>");
            $('#windspeed3').html("<p>Wind Speed: " + data.list[16].wind.speed + "mph</p>");

        //    cards need to be hidden
        //    once toggle button is CLICKED, reveal and space accordingly
        //    html will be added to ids = day-four-weather-info & day-five-weather-info
            $('#high-low-temp4').html("<p>High & Low: " + roundTemperatures(data.list[24].main.temp_max) + "&#8457 / "+ roundTemperatures(data.list[24].main.temp_min) + "&#8457</p>");
            $('#current-temp4').html("<p>Currently: " + roundTemperatures(data.list[24].main.temp) + "&#8457</p>");
            $('#humidity4').html("<p>Humidity: " + data.list[24].main.humidity + "%</p>");
            $('#windspeed4').html("<p>Wind Speed: " + data.list[24].wind.speed + "mph</p>");

            $('#high-low-temp5').html("<p>High & Low: " + roundTemperatures(data.list[24].main.temp_max) + "&#8457 / "+ roundTemperatures(data.list[24].main.temp_min) + "&#8457</p>");
            $('#current-temp5').html("<p>Currently: " + roundTemperatures(data.list[24].main.temp) + "&#8457</p>");
            $('#humidity5').html("<p>Humidity: " + data.list[24].main.humidity + "%</p>");
            $('#windspeed5').html("<p>Wind Speed: " + data.list[24].wind.speed + "mph</p>");

        });
    }

    updateWeatherCardInfo(lat, lng);


    // =================================     ** google map functionality **      ================================= \\

        function initMap() {
            var mapCanvas = document.getElementById('map-canvas');
            var mapOptions = {
                zoom: 13,
                center: {
                    lat: lat,
                    lng: lng
                }
            };

            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({
                draggable: true,
                position: {
                    lat: lat,
                    lng: lng
                },
                map: map
            });


            // event listener to store updated lat and lng when marker is dragged, info passed to weather card updating function
            google.maps.event.addListener(marker, 'dragend', function(e){
                var lat = marker.getPosition().lat();
                var lng = marker.getPosition().lng();

                updateWeatherCardInfo(lat, lng);
            });

        }
// =================================     ** additional function features **      ================================= \\

        function roundTemperatures(num){
            return Math.round(num);
        }



        $('#display-5-day-forecast').on('click', function(){
            $('div .card:hidden').show();
        });

        $('#display-3-day-forecast').on('click', function(){
            $('#day-four, #day-five').hide();
        });





