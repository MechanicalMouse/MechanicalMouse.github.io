var topics = ["hamster", "space", "food", "raichu", "tea", "star trek", "runescape"]

//make buttons
function renderButtons() {    
       
    $("#buttons").empty();

       
       for (var i = 0; i < topics.length; i++) {

         
         var a = $("<button>");
         
         a.addClass("favButton btn btn-info");
         
         a.attr("data-name", topics[i]);
         
         a.text(topics[i]);
         
         $("#buttons").append(a);
       }
}

//add new topic
$("#add-button").on("click", function(event) {
    event.preventDefault();
    
    var topic = $("#button-input").val().trim();
    
    topics.push(topic);

       
    renderButtons();
});


renderButtons();

//gif function
$("button").on("click", function() {
    var topic = $(this).attr("data-name");
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${topic}&limit=10&api_key=UA4jHqQhXxYph6oiBOoI7fl8fNLsuZIt`;

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
    .then(function(response) {
        
        var results = response.data;

        
        for (var i = 0; i < results.length; i++) {

          
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            
                var gifDiv = $("<div>");

            
                var rating = results[i].rating;

            
                var topicImage = $("<img>");
                
                
                var p = $("<p>").text("Rating: " + rating);
                
                
                topicImage.attr("src", results[i].images.fixed_height.url);
                topicImage.attr("data-state", "still");
                topicImage.attr("data-still", results[i].images.fixed_height_still.url);
                topicImage.attr("data-animate", results[i].images.fixed_height.url);
                topicImage.addClass("image");

                gifDiv.prepend(p);
                gifDiv.prepend(topicImage);

            
                $("#gifs").prepend(gifDiv);
            }
        }
    });

});

//animating gifs
$(document).on("click", ".image", function(){
	var state = $(this).attr("data-state");
		if ( state === "still"){
                $(this).attr("src", $(this).data("animate"));
                $(this).attr("data-state", "animate");
            }else{
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
            };
});