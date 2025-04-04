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
