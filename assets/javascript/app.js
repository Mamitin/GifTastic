//Initial array of famous athletes
var topics = ["Michael Jordon", "Tiger Woods", "Marshawn Lynch", "Kobe Bryant", "Klay Thompson", "Eli Manning", "Lebron James", "Blake Griffith", "David Beckham", "Reggie Bush"];

//Create function re-renders the HTML to display the appropriate content
function displayTopics() {
    var athletes = $(this).attr("data-athletes");

//Create queryURL
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athletes + "&api_key=rqcp4alraOM85IAywNsBaaG7PoyVJBV2=10"

//Performing an AJAX request with the queryURL
$.ajax({
    URL: queryURL,
    method: "get"
    //Storing the data from the AJAX request in the response
}).then(function (response) {
    console.log(response);

    //Looping through each result time
    for (var i = 0; i <= result.length; i++) {
        //Creating and storing a div tag
        var gifDiv = $("<div>").attr("class", "gifArea");
        console.log();
        //Creating and storing an image tag
        var gifImage = $("<>");
        //Setting the attribute of the image
        gifImage.attr("class", "img-gif");
        //Set the image/gif attr to load still
        gifImage.attr('src', results[i].images.fixed_height_still.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-animate", results[i].images.fixed_height.url);
        gifImage.attr("data-state", "still");

        //property pulled off the result item's rating
        var rating = $("<p>").text(" rating: " + results[i].rating).attr("class", "rating");

        //Appending the image
        gifDiv.append(gifImage);
        //Appending the rating
        gifDiv.append(rating);

        $(".gif-container").prepend(gifDiv);

    }
});
}


//Add event listener to all elements with class
$(document).on("click", ".gif", function () {
    //Adding data-attribute
    var state = $(this).attr('data-state')


    //Function for displaying athletes data
    //Adding a class to the buttons
//Deleting the previous gifs

//Loop through array of topics 

//Dynamically gernerate buttons for each basketball athletes
//Add button to the div


//Create function for when button is clicked
//Grab input from textbox
//Add input from textbox to array



//Calling function to diplay initial buttons