$(document).ready(function(){
    function buildQueryURL() {
        var queryURL = "http://api.giphy.com/v1/gifs/search";
        // grab text the user typed into the search input, add as parameter to url
        const searchTerm = $("#search-term").val().trim();
        var apiKey = "&api_key=Zp972qzB0XP796f0m8NqDRi1nyDJgP1g"
        queryURL += "?q=" + searchTerm + apiKey + "&limit=10";
        console.log("---------------\nURL: " + queryURL + "\n---------------");
        return queryURL;
      };
      
      // function to empty out the gifs
      function clear() {
        $("#gifs").empty();
      };
      function createButton(){
        const getButton = $("#buttonGroup");
        const p = $("<p>")
        const button = $("<button type='button' class='btn btn-dark'>");
        getButton.p.button;
      }
      // CLICK HANDLERS
      $("#go").on("click", function (event) {
        event.preventDefault();
        clear();
        var queryURL = buildQueryURL();
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response){
            var results = response.data;
            console.log(response);
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='item'>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);
        
                // gifs appear here
                gifDiv.append(p);
                gifDiv.append(personImage);
                $("#gifs").prepend(gifDiv);
        };
          createButton();
    });
    
    });
});
