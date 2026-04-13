export class CartCount extends HTMLElement {
  constructor() {
    super();

    this.boundOnProductAdd = this.onProductAdd.bind(this);
  }

  connectedCallback() {
    this.badge = this.querySelector('.cart-link__badge');
    this.countEl = this.querySelector('.cart-link__count');
    document.addEventListener('product-form:add', this.boundOnProductAdd);
  }

  disconnectedCallback() {
    document.removeEventListener('product-form:add', this.boundOnProductAdd);
  }

  async onProductAdd() {
    try {
      const res = await fetch('/cart.js', { headers: { Accept: 'application/json' } });
      if (!res.ok) {
        return;
      }
      const cart = await res.json();
      const count = cart.item_count;

      if (this.countEl) this.countEl.textContent = count;
      if (this.badge) this.badge.hidden = count === 0;
    } catch (error) {
      if (debug) console.warn('[cart-count] Failed to refresh cart count', error);
    }
  }
}

if (!customElements.get('cart-count')) {
  customElements.define('cart-count', CartCount);
}
