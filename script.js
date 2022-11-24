const swiper = new Swiper(".mySwiper", {
  loop: true,
  drag: 'free',
  slidesPerView: 6.5,
  spaceBetween: 30,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1220: {
      slidesPerView: 6.5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 6.5,
      spaceBetween: 30,
    },
  },
  speed: 2000,
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 2.4,
  spaceBetween: 30,
  breakpoints: {
    300: {
      slidesPerView: 0.8,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    975: {
      slidesPerView: 1.8,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1220: {
      slidesPerView: 2.4,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 2.8,
      spaceBetween: 30,
    }
  },
  autoplay: {
    delay: 500,
    disableOnInteraction: false
  },

  speed: 2000,
});