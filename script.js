let swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
})

document.querySelector('img').addEventListener('click', (e) => {
  console.log(e);
  swiper.slideNext();
  alert('Next');
});

