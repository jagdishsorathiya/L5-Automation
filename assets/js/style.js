var owl = $(".owl-img");
owl.owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  dots:false,
  center: true,     
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    375: {
      items: 1,
    },
    425: {
      items: 1,
    },
    480: {
      items: 2,
    },
    525: {
      items: 2,
    },
    576: {
      items: 2.5,
    },
    768: {
      items: 3,
    },
    992: {
      items: 3.5,
    },
    1280: {
      items: 4,
    },
    1440: {
      items: 4,
    },
  },
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  dots:false,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    475: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

// var owl = $(".owl-slider");
// owl.owlCarousel({
//   margin: 10,
//   loop: true,
//   autoplay: true,
//   dots:false,
//   autoplayTimeout: 3000,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     475: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// });
// class="owl-carousel owl-theme"
// class="item"

