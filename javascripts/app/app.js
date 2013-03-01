(function () {
  "use strict";
  var $ = window.$,
    jQuery = window.jQuery;

  var main = function () {

    var twitter = new ctwitter.CTwitter(),
      tweetTopic = "",
      tweetCount = 0;
    

    $("#user_button").click(function () { 
      $("#tweet_counter").hide();
      $("#tweets").hide();
      tweetTopic = $("#user_input").val();
      //console.log(tweetTopic);

      twitter.stream("statuses/filter", {lang: "en", track: [tweetTopic] }, function (stream) {
        stream.on("data", function (tweet) {
          tweetCount = tweetCount + 1;
          $("#tweets").prepend("<p class = 'response'>" + tweet.text + "</p>").hide().fadeIn(300);
          $(".response").fadeOut(8000, function () {
            $(this).remove();
          });
          //displays tweets
          $("#tweet_counter").html("<p>Number of tweets: " + tweetCount + "</p>");

        });//end stream
        $("#user_interface").fadeOut();
        $("#tweets").fadeIn();
        $("#tweet_counter").fadeIn();
      }); 
 
    });
    $("#fittext_1").fitText();
    $("fittext_2").fitText();

  };

  $(document).ready(main);
}());