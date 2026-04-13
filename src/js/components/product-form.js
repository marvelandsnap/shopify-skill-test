export class ProductForm extends HTMLElement {
  constructor() {
    super();

    this.FORM = this.querySelector('form');
    this.SUBMIT = this.querySelector('[data-product-atc]');

    this.boundOnSubmit = this.onSubmit.bind(this);
  }

  connectedCallback() {
    if (!this.FORM) return;

    this.FORM.addEventListener('submit', this.boundOnSubmit);
  }

  disconnectedCallback() {
    if (this.FORM) this.FORM.removeEventListener('submit', this.boundOnSubmit);
  }

  async onSubmit(event) {
    event.preventDefault();

    const body = new FormData(this.FORM);
    this.setBusy(true);

    try {
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      });

      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(payload?.description || payload?.message || 'Failed to add to cart');
      }

      this.dispatchEvent(
        new CustomEvent('product-form:add', {
          bubbles: true,
          detail: {
            response: payload,
          },
        }),
      );
    } catch (error) {
      this.dispatchEvent(
        new CustomEvent('product-form:error', {
          bubbles: true,
          detail: { message: error?.message || String(error) },
        }),
      );
    } finally {
      this.setBusy(false);
    }
  }

  setBusy(isBusy) {
    this.toggleAttribute('aria-busy', Boolean(isBusy));
    if (this.SUBMIT) this.SUBMIT.disabled = Boolean(isBusy);
  }
}

if (!customElements.get('product-form')) {
  customElements.define('product-form', ProductForm);
}

