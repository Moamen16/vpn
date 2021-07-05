$(document).ready(function(){

    $('#menu').on('click',function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });


    if($('header .navbar').has('.nav-toggle')){
        $('.oiu').text('For business');
        $('.oiu1').text('help center');
    }

    $('#footer h1 span').on('click',function(){
        $(window).scrollTop(0);
    });
    
   $('.a1').hover(function(){
       $('.h3-2 ,.h3-3 ,.h3-4').css('color','#333');
   },function(){
    $('.h3-2 ,.h3-3 ,.h3-4').css('color','#fff');
   });

   $('.a2').hover(function(){
    $('.h3-1 ,.h3-3 ,.h3-4').css('color','#333');
   },function(){
   $('.h3-1 ,.h3-3 ,.h3-4').css('color','#fff');
   });

   $('.a3').hover(function(){
    $('.h3-2 ,.h3-1 ,.h3-4').css('color','#333');
    },function(){
    $('.h3-2 ,.h3-1 ,.h3-4').css('color','#fff');
    });

    $('.a4').hover(function(){
        $('.h3-2 ,.h3-3 ,.h3-1').css('color','#333');
    },function(){
     $('.h3-1 ,.h3-3 ,.h3-2').css('color','#fff');
    });
});





