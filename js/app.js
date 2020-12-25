$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:5000,
        speed:800,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });



    // let hamberger = document.querySelector('.hamberger');
    // let times = document.querySelector('.times');
    // let mobileNav = document.querySelector('.mobile-nav');

    // hamberger.addEventListener('click', function(){
    //     mobileNav.classList.add('open');
    // });

    // times.addEventListener('click', function(){
    //     mobileNav.classList.remove('open');
    // });

    $('.hamberger').click(function(){
        $('.mobile-nav').addClass('open');
    });

    $('.times, .nav').click(function(){
        $('.mobile-nav').removeClass('open');
    });

});