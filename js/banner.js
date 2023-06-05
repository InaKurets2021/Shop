const swiper = new Swiper('.banner__slider', {
   wrapperClass: 'banner__wrapper',
   slideClass:'banner__slide',
    pagination: {
      el: '.banner__pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.banner__next',
      prevEl: '.banner__prev',
    },
  
     });

   