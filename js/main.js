$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})


$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})



// Burger menu

const navBurger = document.querySelector('.nav__burger');
const menuIcon = document.querySelector('.menu-icon');

navBurger.onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
}


