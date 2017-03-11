$(document).ready(function() {

  $("form#pingpong").submit(function(event) {
      //$("#result").hide();
      event.preventDefault();
      var numberEntered = $("#number").val();
      var numberEnteredParsed = parseInt(numberEntered);
      var pingPongArray = [];
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

      //var vowels = ["a","e","i","o","u"];
      // var pingpong1 = " ";
      //   //console.log();
      //
      // if (numberEntered % 3 = 0) {
      //   pingpong1 = "ping";
      //   alert(pingpong1);
      // } else {
      //   alert("no");
      // }

      // for (var i=0;vowels.length-1 >=i; i+=1)
      // {
      //   if (word1[0]===vowels[i]) {
      //     pigLatin = word1 + 'ay';
      //     console.log("true");
      //     alert(pigLatin);
      //   }
      //   else {
      //     alert("no");
      //     console.log("false");
      //   }
      //}
