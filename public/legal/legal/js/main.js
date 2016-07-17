function sticky(){
    var scrollTop = $(window).scrollTop(),
        //bannerTop = $('.banner').offset().top,
        header = $('.header-main').outerHeight();
    if($(window).width() > 768){
        if(scrollTop > header){
            $('.header-main').addClass('navbar-fixed-top');
            //$('.banner').css('margin-top','252px');
        }else{
            $('.header-main').removeClass('navbar-fixed-top');
            //$('.banner').css('margin-top','0px');
        }
    } 
}
$(document).ready(function(){
    // slider custom configuaration
    //$('.datepicker').datepicker();
    $('#myCarousel').carousel({
        interval: false,
        pause: "false"
    });

    $('.navigation ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $('.mobMenuTab').click(function(e){
        e.preventDefault();
        $('nav').toggleClass('active');
        if($(this).hasClass('mobMenuTabOpen')){
            $(this).removeClass('mobMenuTabOpen');
        }else{
            $(this).addClass('mobMenuTabOpen');
        }
    });

    $('.header-main .navigation ul li a').click(function(e){
        e.preventDefault();
        var scroll = $(this).attr('href').replace('#','');
        if(scroll){
            var element = $('div[id="'+scroll+'"]').offset().top;
            if($('.header-main').hasClass('navbar-fixed-top')){
                element = element - $('.header').outerHeight() - 20;
            }else{
                element = element - $('.header').outerHeight() - 150;
            }
            $('body,html').animate({
                scrollTop : element
            },'slow');
        }
    });

    $(window).scroll(function(){
        sticky();
    });
    $(window).resize(function(){
        sticky();
    });

    window.sr = new scrollReveal({
        mobile:false
    });

});
