export class ProductSlider extends HTMLElement {
  constructor() {
    super();

    this.CAROUSEL = this.querySelector('.product-slider__carousel');
    this.boundOnClick = this.onClick.bind(this);
  }

  connectedCallback() {
    if (!this.CAROUSEL) return;
    this.addEventListener('click', this.boundOnClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.boundOnClick);
  }

  onClick(event) {
    const btn = event.target.closest('[data-product-slider-thumb]');
    if (!btn || !this.contains(btn)) return;

    const index = Number(btn.getAttribute('data-slide-index') || 0);

    if (!window.jQuery) return;
    const $carousel = window.jQuery(this.CAROUSEL);
    if (!$carousel.length || typeof $carousel.slick !== 'function') return;

    $carousel.slick('slickGoTo', index);
  }
}

if (!customElements.get('product-slider')) {
  customElements.define('product-slider', ProductSlider);
}

