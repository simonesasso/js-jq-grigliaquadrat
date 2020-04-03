// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi


$(document).ready(function(){

  // genero gli elementi html
  for (var y = 0; y < 64; y++) {
    var prevContent = $(".tablecontainer").html();
    $(".tablecontainer").html(prevContent + "<div class='square'></div>");
  }

  // tenere il punteggio dei Verdi VS Rossi
var redPoint = 0, greenPoint = 0;

  // faccio cose
  // $('.square').click(
  //   function () {
  //     if($(this).hasClass('redWannabe')){
  //       $(this).css('background', 'red');
  //       redPoint++;
  //       console.log("punteggio rosso: " + redPoint);
  //       $('.prossa').html("punteggio rosso: " + redPoint);
  //     } else {
  //       $(this).css('background', 'green');
  //       greenPoint++;
  //       console.log("punteggio verde: " + greenPoint);
  //       $('.pverde').html("punteggio verde: " + greenPoint);
  //     }
  //   }
  // );


  $('.square').click(
    function () {
      if($(this).hasClass('active')){
        console.log("OH! l'hai già cliccato!");
      } else if($(this).hasClass('redWannabe')){
        $(this).css('background', 'red');
        redPoint++;
        $(this).addClass('active');
        // $(this).attr('active', 'vero');
        console.log("punteggio rosso: " + redPoint);
        $('.prossa').html("punteggio rosso: " + redPoint);
        // messaggio di sconfitta
        if (redPoint == 3) {
          setTimeout(function(){ alert("HAI PERSO"); }, 100);
          setTimeout(function(){ location.reload(); }, 200);
        }


      } else {
        $(this).css('background', 'green');
        greenPoint++;
        $(this).addClass('active');
        console.log("punteggio verde: " + greenPoint);
        $('.pverde').html("punteggio verde: " + greenPoint);
        // messaggio di vittoria
        if (greenPoint == 49) {
          setTimeout(function(){ alert("HAI VINTO"); }, 100);
          setTimeout(function(){ location.reload(); }, 200);
        }
      }
    }
  );

// genero un array di quindici numeri random con un while loop
 var arrayNumRandom = [];

 var i = 0;
 while (i < 15) {
   var numRandom = Math.floor(Math.random() * 64) + 1;
   if (arrayNumRandom.includes(numRandom)) {
    // se il numero è gia presente nellarray non lo includo e non incremento i
   }else {
     arrayNumRandom.push(numRandom);
     i++;
   }
   console.log(arrayNumRandom);
 }
// il for attraversa larray e con eq(test) assegno  a 15 square scelti randomicamente
// in base ai numeri generati la classe redWannabe
 for (var j = 0; j <= 15; j++) {
   var test = arrayNumRandom[j];
   $(".square").eq(test).addClass("redWannabe");
 }



});
