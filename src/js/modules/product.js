$(() => {
  const $section = $('[data-product-section]');

  if (!$section.length) {
    return;
  }

  // Gallery: init both carousels and sync them
  const $galleryMain = $('[data-product-gallery-main]');
  const $galleryThumbs = $('[data-product-gallery-thumbs]');

  if ($galleryMain.length) {
    $galleryMain.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: $galleryThumbs.length ? $galleryThumbs : null
    });
  }

  if ($galleryThumbs.length) {
    $galleryThumbs.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: $galleryMain.length ? $galleryMain : null,
      arrows: false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });

    // Change slides on click/key press of thumbnails
    $galleryThumbs.on('click', '.slick-slide', (event) => {
      const index = $(event.currentTarget).data('slick-index');
      $galleryMain.slick('slickGoTo', index);
    });

    $galleryThumbs.on('keydown', '.slick-slide', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const index = $(event.currentTarget).data('slick-index');
        $galleryMain.slick('slickGoTo', index);
      }
    });
  }

  const productJson = $('[data-product-json]').html();

  if (!productJson) {
    return;
  }

  const product = JSON.parse(productJson);
  const $variantSelect = $('[data-variant-select]');
  const $variantIdInput = $('[data-variant-id]');
  const $priceCurrent = $('[data-product-price-current]');
  const $priceCompare = $('[data-product-price-compare]');
  const $priceContainer = $('[data-product-price]');
  const $quantityInput = $('[data-quantity-input]');
  const $quantityMinus = $('[data-quantity-minus]');
  const $quantityPlus = $('[data-quantity-plus]');

  /**
   * Formats a price in cents to a currency string.
   * @param {number} cents - The price in cents.
   * @returns {string} The formatted price string.
   */
  const formatMoney = (cents) => {
    return '$' + (cents / 100).toFixed(2);
  };

  /**
   * Updates the displayed price when a variant is selected.
   */
  const handleVariantChange = () => {
    const variantId = parseInt($variantSelect.val(), 10);
    const variant = product.variants.find((v) => v.id === variantId);

    if (!variant) {
      return;
    }

    $variantIdInput.val(variant.id);
    $priceCurrent.text(formatMoney(variant.price));

    if (variant.compare_at_price && variant.compare_at_price > variant.price) {
      if ($priceCompare.length) {
        $priceCompare.text(formatMoney(variant.compare_at_price)).show();
      } else {
        $priceContainer.append(
          `<s class="product__price-compare" data-product-price-compare>${formatMoney(variant.compare_at_price)}</s>`
        );
      }
    } else {
      $priceCompare.hide();
    }
  };

  /**
   * Decreases the quantity input value by 1 (minimum 1).
   */
  const handleQuantityMinus = () => {
    const current = parseInt($quantityInput.val(), 10) || 1;
    if (current > 1) {
      $quantityInput.val(current - 1);
    }
  };

  /**
   * Increases the quantity input value by 1.
   */
  const handleQuantityPlus = () => {
    const current = parseInt($quantityInput.val(), 10) || 1;
    $quantityInput.val(current + 1);
  };

  $variantSelect.on('change', handleVariantChange);
  $quantityMinus.on('click', handleQuantityMinus);
  $quantityPlus.on('click', handleQuantityPlus);

  $quantityInput.on('change', () => {
    const val = parseInt($quantityInput.val(), 10);
    if (!val || val < 1) {
      $quantityInput.val(1);
    }
  });
});
