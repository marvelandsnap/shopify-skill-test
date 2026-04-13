export class VariantSelector extends HTMLElement {
  constructor() {
    super();

    this.SELECT = this.querySelector('[data-variant-select]');
    this.boundOnChange = this.onChange.bind(this);
  }

  connectedCallback() {
    if (!this.SELECT) return;
    this.SELECT.addEventListener('change', this.boundOnChange);
    this.sync();
  }

  disconnectedCallback() {
    if (this.SELECT) this.SELECT.removeEventListener('change', this.boundOnChange);
  }

  onChange() {
    this.sync();
  }

  sync() {
    const option = this.SELECT?.selectedOptions?.[0];
    if (!option) return;

    const sectionEl = this.closest('[data-product-section]') || document;
    const currentEl = sectionEl.querySelector('[data-product-price-current]');
    const compareEl = sectionEl.querySelector('[data-product-price-compare]');
    const atcBtn = sectionEl.querySelector('[data-product-atc]');

    const price = option.getAttribute('data-price') || '';
    const compareAt = option.getAttribute('data-compare-at-price') || '';
    const hasCompareAt = option.getAttribute('data-has-compare-at') === 'true';
    const available = option.getAttribute('data-available') === 'true';

    if (currentEl) currentEl.textContent = price;

    if (compareEl) {
      if (hasCompareAt && compareAt) {
        compareEl.textContent = compareAt;
        compareEl.classList.remove('d-none');
      } else {
        compareEl.textContent = '';
        compareEl.classList.add('d-none');
      }
    }

    if (atcBtn) atcBtn.disabled = !available;
  }
}

if (!customElements.get('variant-selector')) {
  customElements.define('variant-selector', VariantSelector);
}

