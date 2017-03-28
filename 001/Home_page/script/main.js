$(document).ready(function(){
  $(".fa-bars").on("click", function(){
    $(".list").css({
      "display":"block",
      "right":"0%",
    });
    
    
  });
  
  $(".fa-times").on("click", function(){
    $(".list").css({
      "display":"none",
      "right":"-40%",
    });
    
    
    
  });
  

});