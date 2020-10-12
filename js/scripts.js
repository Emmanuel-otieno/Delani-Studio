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
    var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
   return false;
  }
  else{
      alert("" +"we have received your message" + "Thank you fro reaching out to us");
  }
}