$(document).ready(function() {

  $("form#pingpong").submit(function(event) {
      //$("#result").hide();
      event.preventDefault();
      var numberEntered = $("#number").val();
      var numberEnteredParsed = parseInt(numberEntered);
      var pingPongArray = [];
      //var dividers =
      //console.log(numberEnteredParsed);
      //console.log(numberEntered);
      //alert ("yes");
      var pingPongLoop = " ";
      for (var i=1; i <= numberEnteredParsed; i++){
         pingPongLoop += i + ", ";
         $("#result").text(pingPongLoop);
         pingPongArray = [pingPongLoop];

         //alert [pingPongArray];
         //console.log(pingPongLoop);
         console.log(pingPongArray);
         
         if (numberEnteredParsed % 15 === 0) {
           $("#result").text("PingPong");
         } else if (numberEnteredParsed % 5 === 0) {
           $("#result").text("Pong");
         } else if (numberEnteredParsed % 3 === 0) {
           $("#result").text("Ping");
      }
    }

    });
});
