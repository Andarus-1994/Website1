$(document).ready(function(){

    $("a").on('click', function(event) {
    
      if (this.hash !== "") {
       
        event.preventDefault();
  
     
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){ 
          window.location.hash = hash;
        });
      } 
    });
  });

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.height = "50px";
      document.getElementById("logo").style.fontSize = "1.5rem";
    
      
    } else {
      document.getElementById("navbar").style.height = "80px";
      document.getElementById("logo").style.fontSize = "2rem";
      
    
      
    }
	
	  var y = $(this).scrollTop();
    var div = $(".hideOnScroll");
  
    if (y > 660){
        div.removeClass("hideOnScroll").addClass("showOnScroll");
        
    } 

  }

 