

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: true,
      },
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        }
      }
    });
  });
  