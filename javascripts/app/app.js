var main = function () {
  
	var twitter = new ctwitter.CTwitter();
	twitter.stream("statuses/filter", {lang:"en", track:["Zurb Foundation"]}, function(stream) {
		stream.on("data", function(tweet) {
      
			$("#tweets").prepend("<p class='response'>" + tweet.text + "</p>");
      $(".response").fadeOut(9000, function() {
        
				$(this).remove();
        
			});
      
		});
    
	});
  
}


$(document).ready(main);