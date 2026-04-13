export class QuantitySelector extends HTMLElement {
  constructor() {
    super();

    this.INPUT = this.querySelector('input[type="number"]');
    this.boundOnClick = this.onClick.bind(this);
  }

  connectedCallback() {
    if (!this.INPUT) return;
    this.addEventListener('click', this.boundOnClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.boundOnClick);
  }

  onClick(event) {
    const stepper = event.target.closest('[data-qty-step]');
    if (!stepper || !this.contains(stepper)) return;

    const step = Number(stepper.getAttribute('data-qty-step') || 0);
    const min = Number(this.INPUT.getAttribute('min') || 1);
    const current = Number(this.INPUT.value || min);
    const next = Math.max(min, current + step);

    this.INPUT.value = String(next);
  }
}

if (!customElements.get('quantity-selector')) {
  customElements.define('quantity-selector', QuantitySelector);
}

