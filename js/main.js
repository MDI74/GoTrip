$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    startPosition: 1,
    margin: 30,
    items: 1,
    responsive: {
        460:{
            items: 3,
        },
        850:{
            items: 3,
        },
        1020:{
            margin: 20,
            items: 3,
        },
        1200:{
            items: 3,
        },
    }
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})


$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})



// Burger menu

const navBurger = document.querySelector('.nav__burger');
const nav = document.querySelector('nav')
const menuIcon = document.querySelector('.menu-icon');

navBurger.onclick = function(){
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}




