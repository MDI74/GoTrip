// Owl-carousel

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
        500:{
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
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menu-icon');

navBurger.addEventListener('click', function(){
    nav.classList.toggle('nav--mobile');
    if(menuIcon.classList.toggle('menu-icon-active')){
        document.body.classList.add('no-scroll');
    }
    else {
        document.body.classList.remove('no-scroll');
    }
}) 


// Sign up and login
const popupClose = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('[data-popup]');
const btnPopup = document.querySelectorAll('[data-popup-btn]');

btnPopup.forEach(function(item) {
    item.addEventListener('click', function() {
        const popupId = document.querySelector('#'+ this.dataset.popupBtn);

        popupId.classList.add('open');

        document.body.classList.add('no-scroll');
        nav.classList.remove('nav--mobile');
        menuIcon.classList.remove('menu-icon-active');
    });
});

popupClose.forEach(function(item) {
    item.addEventListener('click', function() {
        popups.forEach(function(item) {
            item.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });
});

// Закрытие popup меню при клике вне его
popups.forEach(function (item) {
    item.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
            item.classList.remove('open');
            document.body.classList.add('no-scroll');
        }
    })
})


