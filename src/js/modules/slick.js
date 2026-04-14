import '@accessible360/accessible-slick';

$(() => {
  const $mainGallery = $('.product-gallery__main');
  const $thumbsGallery = $('.product-gallery__thumbs');

  if ($mainGallery.length && $thumbsGallery.length) {

    // Initialize thumbnails first
    $thumbsGallery.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.product-gallery__main',
      focusOnSelect: true,
      arrows: false,
      infinite: false,
      accessibility: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4
          }
        }
        ,{
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    });

    // Initialize main carousel after thumbnails
    $mainGallery.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.product-gallery__thumbs',
      infinite: false,
      accessibility: true
    });

    // Debug: Log click events
    $thumbsGallery.on('click', '.product-gallery__thumb', function(e) {
      const index = $thumbsGallery.find('.product-gallery__thumb').index(this);
      $mainGallery.slick('slickGoTo', index);
    });
  }

  // Generic carousels with data-slick attribute
  const $carousels = $('[data-slick]');
  if ($carousels.length) {
    $carousels.each((i, element) => {
      $(element).slick();
    });
  }
});
