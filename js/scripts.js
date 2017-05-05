$(document).ready(function() {
 var pContainerHeight = $('.parallax-container').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.parallax-object-back').css({
      'transform' : 'translate(0px, '+ wScroll /1 +'%)'
    });

    $('.parallax-object-mid').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.parallax-object-fore').css({
      'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
    });

  }
});


/*image fadein script */
$(window).scroll(function(){
    w = Math.floor( $(window).scrollTop() ); 

    if(($('#blurFour').offset().top > 400) && (w >= $('#triggerFour').offset().top - 300)) {
        $('#blurFour').removeClass('hidden');
         $('#blurFour').addClass('animated fadeInRight');
    window.setTimeout(function() {
        $('#sharpFour').removeClass('hidden');
        $('#sharpFour').addClass('animated fadeInRight');
    }, 
    200);
    } 

 });

$(window).scroll(function(){
    w = Math.floor( $(window).scrollTop() ); 
    if(($('#blurThree').offset().top > 400) && (w >= $('#triggerThree').offset().top -300)) {
        $('#blurThree').removeClass('hidden');
         $('#blurThree').addClass('animated fadeInLeft');
    window.setTimeout(function() {
        $('#sharpThree').removeClass('hidden');
        $('#sharpThree').addClass('animated fadeInLeft');
    }, 
    200);
    } 
 });


$(window).scroll(function(){
    w = Math.floor( $(window).scrollTop() ); 
        if(($('#blurTwo').offset().top > 400) && (w >= $('#triggerTwo').offset().top -300)) {
        $('#blurTwo').removeClass('hidden');
         $('#blurTwo').addClass('animated fadeInRight');
    window.setTimeout(function() {
        $('#sharpTwo').removeClass('hidden');
        $('#sharpTwo').addClass('animated fadeInRight');
    }, 
    200);
    } 
  });   


$(window).scroll(function(){
    w = Math.floor( $(window).scrollTop() ); 
    if(($('#blurOne').offset().top > 400) && (w >= $('#triggerOne').offset().top -300)) {
        $('#blurOne').removeClass('hidden');
         $('#blurOne').addClass('animated fadeInLeft');
    window.setTimeout(function() {
        $('#sharpOne').removeClass('hidden');
        $('#sharpOne').addClass('animated fadeInLeft');
    }, 
    200);
    };
 
  });

 $(window).scroll(function(){
  var parallaxDiff = $(window).scrollTop()-$('#triggerOne').offset().top + 200;

  if ($("#sharpOne").hasClass("animated") && parallaxDiff < 500 && 100 < parallaxDiff) {
    $("#sharpOne").css(
      'top', parallaxDiff/8 +'px'
    );
    /* $('#sharpOne').css("top",); */
  }

  }); 

 $(window).scroll(function(){
  var parallaxDiff = $(window).scrollTop()-$('#triggerTwo').offset().top + 200;

  if ($("#sharpTwo").hasClass("animated") && parallaxDiff < 500 && 100 < parallaxDiff) {
    $("#sharpTwo").css(
      'top', parallaxDiff/6 +'px'
    );
    /* $('#sharpOne').css("top",); */
  }

  }); 

   $(window).scroll(function(){
  var parallaxDiff = $(window).scrollTop()-$('#triggerThree').offset().top + 200;

  if ($("#sharpThree").hasClass("animated") && parallaxDiff < 500 && 100 < parallaxDiff) {
    $("#sharpThree").css(
      'top', parallaxDiff/-6  +'px'
    );
    /* $('#sharpOne').css("top",); */
  }

  });

   $(window).scroll(function(){
  var parallaxDiff = $(window).scrollTop()-$('#triggerFour').offset().top + 200;

  if ($("#sharpFour").hasClass("animated") && parallaxDiff < 500 && 100 < parallaxDiff) {
    $("#sharpFour").css(
      'top', parallaxDiff/-6 +'px'
    );
    /* $('#sharpOne').css("top",); */
  }

  }); 

/*consmetic scripts */ 
$(".3d-depth").hover(function(){
  $(this).toggleClass("is-active");
});

});

 
