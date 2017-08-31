$(document).ready(function(){

$(document).keydown(function(e) {
var move = $('#bomberman');

    switch (e.which)
    {

        case 37:
            $(move).css(
              {
                marginLeft: "-=5"
              });
            break;
        case 38 :
        $(move).css(
          {
            marginTop : "-=5"
          });
        break;

        case 39 :
        $(move).css(
          {
            marginLeft : "+=5"
          });
        break;

        case 40 :
        $(move).css(
          {
            marginTop : "+=5"
          });
        break;
   }

});


});



/*
var marginTop = 0;
var marginLeft = 0;

document.onkeydown = move;

function move(e) {

    if (e.keyCode == '38') {
        marginTop -= 5;
        document.getElementById("bomberman").style.marginTop = marginTop + "px";

      }

    else if (e.keyCode == '40') {
        marginTop += 5;
        document.getElementById("bomberman").style.marginTop = marginTop + "px";

      }

    else if (e.keyCode == '37') {
        marginLeft -= 5;
        document.getElementById("bomberman").style.marginLeft = marginLeft + "px";

      }

    else if (e.keyCode == '39') {
        marginLeft += 5;
        document.getElementById("bomberman").style.marginLeft = marginLeft + "px";

      }

    }
*/
