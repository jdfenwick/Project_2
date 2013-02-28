(function () {
  "use strict";
  var $ = window.$,
    jQuery = window.jQuery;

  var main = function () {

    var twitter = new ctwitter.CTwitter(),
      tweetTopic = "",
      tweetCount = 0;

    $("#user_button").click(function () {
      $("#tweets").hide();
      tweetTopic = $("#user_input").val();
      //console.log(tweetTopic);

      twitter.stream("statuses/filter", {lang: "en", track: [tweetTopic] }, function (stream) {
        stream.on("data", function (tweet) {
          tweetCount = tweetCount + 1;
          $("#tweets").prepend("<p class = 'response'>" + tweet.text + "</p>");
          $(".response").fadeOut(8000, function () {
            $(this).remove();
          });
          //displays tweets

        });//end stream
        $("#tweets").fadeIn();
      }); 
 
    });

  };

  $(document).ready(main);
}());