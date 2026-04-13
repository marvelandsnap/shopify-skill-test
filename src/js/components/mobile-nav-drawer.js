export class MobileNavDrawer extends HTMLElement {
  constructor() {
    super();

    this.boundOnOpenClick = this.onOpenClick.bind(this);
    this.boundOnCloseClick = this.onCloseClick.bind(this);
  }

  connectedCallback() {
    this.openBtn = this.querySelector('[data-mobile-nav-open]');
    this.root = this.querySelector('[data-mobile-nav-root]');
    this.closeEls = this.querySelectorAll('[data-mobile-nav-close]');

    if (this.openBtn) this.openBtn.addEventListener('click', this.boundOnOpenClick);
    this.closeEls.forEach((el) => el.addEventListener('click', this.boundOnCloseClick));
  }

  disconnectedCallback() {
    if (this.openBtn) this.openBtn.removeEventListener('click', this.boundOnOpenClick);
    this.closeEls.forEach((el) => el.removeEventListener('click', this.boundOnCloseClick));
    document.documentElement.classList.remove('mobile-nav-open');
  }

  onOpenClick(event) {
    event.preventDefault();
    this.open();
  }

  onCloseClick(event) {
    event.preventDefault();
    this.close();
  }

  open() {
    if (!this.root) return;
    this.root.classList.add('is-open');
    document.documentElement.classList.add('mobile-nav-open');
  }

  close() {
    if (!this.root) return;
    this.root.classList.remove('is-open');
    document.documentElement.classList.remove('mobile-nav-open');
  }
}

if (!customElements.get('mobile-nav-drawer')) {
  customElements.define('mobile-nav-drawer', MobileNavDrawer);
}
