$(document).ready(function(){
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();

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
//var name = document.getElementById("name").value();
//function contactUs(){
    
  //  document.getElementById("myForm").click();
    //alert("Thank you  for your response.")


//};
$(document).ready(function(){
    $("form").submit(function(){
        alert("Thank you for your response.")
     });
});
//$("#myForm").submit(function(){
  // alert("Thank you for your response.")
//});

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


