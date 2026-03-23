//This creates the swiper slider
const swiper = new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  //Improvement added for assignment: Autoplay
  autoplay: {
    delay: 3000, //The slides change every 3 seconds
    disableOnInteraction: false //This keeps autoplay running after user interacts
  },

  //This is the pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  //This is the navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //This is the responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

//This pauses autoplay when mouse is over the slider
const slider = document.querySelector('.card-wrapper');

slider.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

//This resumes autoplay when mouse leaves
slider.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});