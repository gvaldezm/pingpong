$(document).ready(function() {

  $("form#pingpong").submit(function(event) {
      $("#result").text(" ");
      event.preventDefault();
      //$("#result").hide();
      var numberEntered = $("#number").val();
      var numberEnteredParsed = parseInt(numberEntered);
      // var pingPongArray = [];
      // var pingPongLoop = " ";

      for (var i=1; i <= numberEnteredParsed; i++){
         //pingPongLoop += i + ", ";
         //$("#result").hide();
         //$("#result").append(i + "</br>");
         //pingPongArray = [pingPongLoop];
         //alert [pingPongArray];
         //console.log(pingPongLoop);
         console.log(i);
         //$("#result").text();
         if (i % 15 === 0) {
           $("#result").append("PingPong" + "</br>" );
         } else if (i % 5 === 0) {
           $("#result").append("Pong" + "</br>");
         } else if (i % 3 === 0) {
           $("#result").append("Ping"+ "</br>" );
         } else {
           $("#result").append(i + "</br>");
         }

        //  if (i === "Ping") {
        //
        //  }
    }

    });
});
