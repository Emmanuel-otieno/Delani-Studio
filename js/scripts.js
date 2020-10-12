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

$('.col').hover(function(){






});