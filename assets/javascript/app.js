$(document).ready(function () {

    //Initial array of famous athletes
    var topics = ["Michael Jordon", "Tiger Woods", "Marshawn Lynch", "Kobe Bryant", "Klay Thompson", "Eli Manning", "Lebron James", "Blake Griffin", "David Beckham", "Reggie Bush"];


    //Create function re-renders the HTML to display the appropriate content
    function displayAthletesGif() {
        var athletes = $(this).attr("data-athletes");

        //Create queryURL
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athletes + "&api_key=rqcp4alraOM85IAywNsBaaG7PoyVJBV2&limit=10&offset=0&rating=PG&lang=en"

        //Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

            //Clear previous gifs
            $(".gifDiv").empty();

            //Looping through each 
            for (var i = 0; i < results.length; i++) {
                //Creating and storing a div tag
                var gifDiv = $("<div>").attr("class", "gifDiv float-md-left");
                //console.log();
                //Creating and storing an image tag
                var gifImage = $("<img>");
                //Setting the attribute of the image
                gifImage.attr("class", "img-fluid gif");
                //Set the image/gif attr to load still
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                gifImage.attr("data-animate", results[i].images.fixed_height.url);
                gifImage.attr("data-state", "still");

                //property pulled off the result item's rating
                var rating = $("<p>").text(" Rating: " + results[i].rating).attr("class", "rating");

                //Appending the image
                gifDiv.append(gifImage);
                //Appending the rating
                gifDiv.append(rating);

                $(".gif-container").prepend(gifDiv);

            }
        });
    };

    //Add event listener to all elements with class
    $(document).on("click", ".gif", function () {
        //Adding data-attribute
        var state = $(this).attr("data-state");
        //Add if/else statement to animate or still gif
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })


    //Function for displaying athlete buttons
    function makeButtons() {
        $("#gif-buttons").empty();

        //Loop through array of topics 
        for (var i = 0; i < topics.length; i++) {
            //Dynamically gernerate buttons for each athletes
            var gifButton = $("<button>");
            //Adding a attr to the buttons
            // gifButton.attr("type", "button");
            gifButton.attr("class", "btn btn-dark mr-2 mt-2 athletes");
            gifButton.text(topics[i]);
            gifButton.attr("data-athletes", topics[i]);
            gifButton.attr("id", "gif-button");
            //Append button to the div
            $("#gif-buttons").append(gifButton);
        }
    }


    //Create for when user searches new athlete
    //Eventlistener to add gif
    $("#add-gif").on("click", function (event) {
        //Deleting the previous gifs
        event.preventDefault();
        //Grab input from textbox
        var athletes = $("#gif-input").val().trim();
        //Add input from textbox to array
        topics.push(athletes);
        makeButtons();
    });

    //Calling document on click to diplay initially on page
    $(document).on("click", ".athletes", displayAthletesGif);
    //call makeButtons function to display buttons
    makeButtons();

});