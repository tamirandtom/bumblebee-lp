
  easy_background(".slider",
  
  {
    slide: ["img/i1.jpg", "img/i2.jpg", "img/i3.jpg"],

    delay: [3500, 3500, 3500]
  }


);


  $( document ).ready(function() {
 


    $( "#arrow" ).on("click", event => {
      $("#page").css("scroll-snap-type", "none");
    
      $("#page").stop().animate(
        { 
        scrollTop: $("#page").scrollTop() + $("#s2").offset().top
         },
        500,
        () => $("#page").css("scroll-snap-type", "y mandatory")
      );
    });


   


});

