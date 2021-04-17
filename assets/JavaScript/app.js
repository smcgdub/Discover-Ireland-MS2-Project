// WEATHER WIDGET (PROVIDED BY WEATHER WIDGET.IO)
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// SMOOTH SCROLLING FROM CLICKING NAVBAR ITEMS 
$(document).ready(function(){
  // DECLARE THE VARIABLE AND LINK IT TO THE SCROLL CLASS CREATED
  var scrollLink = $('.scroll');

  // SMOOTH SCROLLING FUNCTION
  scrollLink.click(function(e){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
});

