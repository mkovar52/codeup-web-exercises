"use strict";
    (function() {

        // TO DOs:
        // practice writing console.logs of various parts of the OpenWeatherMap object...
        // console.log the humidity of the 2nd day - done
        // console.log the humidity of all the days (maybe use .forEach?) - done
        // console.log the temperature of the 3rd day in celsius - done
        // console.log the temperature of the 3rd day in Fahrenheit - done
        // console.log all types of information you will ultimately display for a single day in the exercise - done
        // console.log all type of information you will ultimately display for all days in the 3-day forecast divs -

        //AJAX get request from weather map API
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "e12d834255482e959a94744605064c71",
            id: 4726206,
            units: "imperial"
        }).done(function(data){
            //c-log data from request to confirm working correctly
            console.log(data);

            //weather card info for day 1
            $('#high-low-temp1').append("<p>High & Low: " + roundTemperatures(data.list[0].main.temp_max)+ "&#8457 / "+ roundTemperatures(data.list[0].main.temp_min) + "&#8457</p>");
            $('#current-temp1').append("<p>Currently: " + roundTemperatures(data.list[0].main.temp) + "&#8457</p>");
            $('#humidity1').append("<p>Humidity: " + data.list[0].main.humidity + "%</p>");
            $('#windspeed1').append("<p>Wind Speed: " + data.list[0].wind.speed + "mph</p>");

            //weather card info for day 2
            $('#high-low-temp2').append("<p>High & Low: " + roundTemperatures(data.list[8].main.temp_max) + "&#8457 / "+ roundTemperatures(data.list[8].main.temp_min) + "&#8457</p>");
            $('#current-temp2').append("<p>Currently: " + roundTemperatures(data.list[8].main.temp) + "&#8457</p>");
            $('#humidity2').append("<p>Humidity: " + data.list[8].main.humidity + "%</p>");
            $('#windspeed2').append("<p>Wind Speed: " + data.list[8].wind.speed + "mph</p>");

            //weather card info for day 3
            $('#high-low-temp3').append("<p>High & Low: " + roundTemperatures(data.list[16].main.temp_max) + "&#8457 / "+ roundTemperatures(data.list[16].main.temp_min) + "&#8457</p>");
            $('#current-temp3').append("<p>Currently: " + roundTemperatures(data.list[16].main.temp) + "&#8457</p>");
            $('#humidity3').append("<p>Humidity: " + data.list[16].main.humidity + "%</p>");
            $('#windspeed3').append("<p>Wind Speed: " + data.list[16].wind.speed + "mph</p>");



        });

        //function to build weather card when called
        // would I just pass this function the data.list index for it work properly?
        // function generateWeatherCardInfo(day){
        //     var html = "<div>";
        //     html+= "<p>" + day.main.temp_max.join("/") + day.main.temp_min + "</p>";
        //     html+= "<p> Current Temperature: " + day.main.temp + "</p>";
        //     html+= "<p> Humidity: " + day.main.humidity + "</p>";
        //     html+= "<p> Wind Speed: " + day.wind.speed+"MPH</p>";
        //     var html = "</div>";
        //     //do i need append(html) here?
        // }

        //create a math.round function to use for weather card temperatures. Does it have to be local?
        function roundTemperatures(num){
            return Math.round(num);
        }

















        // ** console.log the humidity of the 2nd day ** \\
        // console.log(data.list[8].main.humidity);
        // console.log(data.list[16].main.humidity);

        // ** console.log the humidity of all the days ** \\
        // data.list.forEach(function(day) {
        //     console.log(day.main.humidity);
        // });

        // ** console.log the temperature of the 3rd day in celsius ** \\
        //could use function to convert temp, but also read in documentation
        // switching "units" also solves this.
        // console.log(data.list[24].main.temp);

        // ** console.log all types of information you will ultimately display for a single day in the exercise ** \\
        // data.list.forEach(function(item){
        //     console.log(item.main.temp);
        // })
        // console.log(data.list[0].main.humidity, data.list[0].main.temp, data.list[0].main.pressure);














    // ** IFFE END ** \\
    })();