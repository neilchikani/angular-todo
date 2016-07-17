 $(document).ready(function(){
     var header = $('.header').outerHeight();
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > header){
            $('.header').addClass('navbar-fixed-top');
        }else{
            $('.header').removeClass('navbar-fixed-top');
        }
    });

 });
