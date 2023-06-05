const swiperStock = new Swiper('.stock__slider', {
    wrapperClass: 'stock__wrapper',
    slideClass: 'stock__slide',
    slidesPerView: 3,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    pagination: {
        el: '.stock__pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.stock__next',
        prevEl: '.stock__prev',
    },

});