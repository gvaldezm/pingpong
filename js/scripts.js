$(document).ready(function() {

  $("form#pingpong").submit(function(event) {
      event.preventDefault();
      var numberEntered = $("#number").val();
      var numberEnteredParsed = parseInt(numberEntered);
      //console.log(numberEnteredParsed);
      //console.log(numberEntered);
      //alert ("yes");
      var pingPongLoop = " ";
      for (var i=1; i <= numberEnteredParsed; i++){
         pingPongLoop += i;
         $("#result").text(pingPongLoop);
         //alert (pingPongLoop);
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
