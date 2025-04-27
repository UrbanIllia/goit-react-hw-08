let swiper1 = null;

function initSwiper1() {
  if (!swiper1) {
    const swiperElement = document.querySelector('.mySwiper');
    if (!swiperElement) {
      console.error('Ошибка: .mySwiper не найден');
      return;
    }
    try {
      swiper1 = new Swiper('.mySwiper', {
        effect: 'cards',
        cardsEffect: {
          perSlideRotate: 15,
          perSlideOffset: 12,
          slideShadows: false,
          rotate: false,
        },
        grabCursor: true,
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.mySwiper .swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1200: {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 0,
            cardsEffect: {
              perSlideOffset: 12,
            },
          },
          1201: {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            cardsEffect: {
              perSlideOffset: 12,
            },
          },
        },
      });
      console.log('Swiper1 инициализирован');
    } catch (error) {
      console.error('Ошибка инициализации Swiper1:', error);
    }
  }
}

let swiper2 = null;

function initSwiper2() {
  if (window.innerWidth <= 1200 && !swiper2) {
    const swiperElement = document.querySelector('.mySwiper2');
    if (!swiperElement) {
      console.error('Ошибка: .mySwiper2 не найден');
      return;
    }
    try {
      swiper2 = new Swiper('.mySwiper2', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.mySwiper2 .swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        },
      });
      console.log('Swiper2 инициализирован');
    } catch (error) {
      console.error('Ошибка инициализации Swiper2:', error);
    }
  }
}

function destroySwiper2() {
  if (swiper2) {
    try {
      swiper2.destroy(true, true);
      swiper2 = null;
      console.log('Swiper2 уничтожен');
    } catch (error) {
      console.error('Ошибка уничтожения Swiper2:', error);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSwiper1();
  if (window.innerWidth <= 1200) {
    initSwiper2();
  } else {
    destroySwiper2();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1200) {
    initSwiper2();
  } else {
    destroySwiper2();
  }
});
