/* OwlCarousel */
$(document).ready(function(){
    $(".carasoler").owlCarousel({
        items: 1,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        loop: true,
    });
})



// Inpit Number 
function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}


/* SmoothScroll */
$(document).ready(function(){
    $('html').smoothScroll(1000);
});