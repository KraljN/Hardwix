$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('aktivni');
    }

    else {
          $('nav').removeClass('aktivni');
    }
});
AOS.init();
$(document).ready(function(){
      $('select').formSelect();
    });
$(document).ready(function(){
$('.fixed-action-btn').floatingActionButton();
});
