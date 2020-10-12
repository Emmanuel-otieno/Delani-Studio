$(document).ready(function(){
    $("#des").click(function(){
      $("#one").toggle();
    });

    $("#dev").click(function(){
        $("#two").toggle();
    });

    $("#pro").click(function(){
        $("#three").toggle();
    });


});

function contactUs(){


  if( document.myForm.Name.value == "" ) {
    alert( "Please provide your name!" );
    document.myForm.Name.focus() ;
    return false;
 }
 if( document.myForm.EMail.value == "" ) {
    alert( "Please provide your Email!" );
    document.myForm.EMail.focus() ;
    return false;
 }
}

$(document).ready(function () {
    $("#omg1").mouseover(function () {
            $("#work1").show();
        })
        .mouseout(function () {
            $("#work1").hide();
        });

  $("#omg2").mouseover(function () {
            $("#work2").show();
        })
        .mouseout(function () {
            $("#work2").hide();
        });

   $("#omg3").mouseover(function () {
            $("#work3").show();
        })
        .mouseout(function () {
            $("#work3").hide();
        });
  $("#omg4").mouseover(function () {
            $("#work4").show();
        })
        .mouseout(function () {
            $("#work4").hide();
        });
   $("#omg5").mouseover(function () {
            $("#work5").show();
        })
        .mouseout(function () {
                 $("#work5").hide();
        });
    $("#omg6").mouseover(function () {
                $("#work6").show();
            })
            .mouseout(function () {
                $("#work6").hide();
            });
    $("#omg7").mouseover(function () {
                $("#work7").show();
            })
            .mouseout(function () {
                $("#work7").hide();
            });
     $("#omg8").mouseover(function () {
                $("#work8").show();
            })
            .mouseout(function () {
                $("#work8").hide();
            });
    
 });


