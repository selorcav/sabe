$( document ).ready(function() {

  // burgertox
  $('.icon').click(function(){
    $('nav .menu').toggleClass('on');
  })
  $('.icon').click(function(){
    $('.icon').toggleClass('active');
  })
  $('nav .menu a').click(function(){
      $('nav .menu').toggleClass('on');
  })
  $('nav .menu a').click(function(){
    $('.icon').toggleClass('active');
  })

  // SCROLLTOID
  $("a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;
  
    $("body, html").animate({
      scrollTop: position
    } /* speed */ );
  });  
})