$(function () {
  $('.quote-slide .slider .slider-content').slick({
    dots:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    responsive:[
      {
        breakpoint:1151,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint:921,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint:580,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});