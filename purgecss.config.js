/**
 * Our PurgeCSS configuration includes content paths for Liquid and
 * JavaScript files within the theme, and a safelist that consists
 * of classes and attributes used by Bootstrap, mmenu, and others.
 * As you develop your theme and install extra packages, you will
 * likely need to modify this safelist to ensure that your CSS is
 * compiled with those in mind.
 *
 * For more information about safelisting, consult the documentation:
 * https://purgecss.com/safelisting.html
 */

const config = {
  content: ['./**/*.liquid', './src/js/**/*.js'],
  safelist: {
    standard: [
      /^alert/,
      /^border/,
      /^col-/,
      'collapsing',
      /^columns/,
      /^d-/,
      /^display/,
      /^fs-/,
      /^mm/,
      /^row-cols/,
      'show',
      /^text/,
      /^(m|p)(x|y|t|b|s|e)?(-(xs|sm|md|lg|xl|xxl))?-\d+/,
    ],
    deep: [/^accordion/, /^btn/, /^list/, /^modal/, /^offcanvas/, /^shopify-challenge/, /^slick/, /^table/],
  },
  dynamicAttributes: ['data-bs-popper'],
};

export default config;
