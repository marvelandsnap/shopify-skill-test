import '@accessible360/accessible-slick';

$(() => {
  const $carousels = $('[data-slick]');

  if ($carousels.length) {
    $carousels.each((index, element) => {
      const $carousel = $(element);
      $carousel.slick();
    });
  }
});

  $(document).ready(function(){

    $('.product-gallery__main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: false,
      asNavFor: '.product-gallery__thumbs',
      accessibility: true
    });

    $('.product-gallery__thumbs').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.product-gallery__main',
      focusOnSelect: true,
      arrows: false,
      accessibility: true
    });

  });
