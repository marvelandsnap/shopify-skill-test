const PANEL_TRANSITION_MS = 280;

export class ProductAccordionGroup extends HTMLElement {
  connectedCallback() {
    this.boundOnTriggerClick = this.onTriggerClick.bind(this);
    this.triggers = [...this.querySelectorAll('[data-accordion-trigger]')];

    this.triggers.forEach((trigger) => {
      trigger.addEventListener('click', this.boundOnTriggerClick);
    });
  }

  disconnectedCallback() {
    this.triggers.forEach((trigger) => {
      trigger.removeEventListener('click', this.boundOnTriggerClick);
    });
  }

  panelFor(trigger) {
    return trigger.closest('.product-accordions__item')?.querySelector('[data-accordion-content]');
  }

  isExpanded(trigger) {
    return trigger.getAttribute('aria-expanded') === 'true';
  }

  open(trigger) {
    const panel = this.panelFor(trigger);
    if (!panel) return;

    trigger.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    window.requestAnimationFrame(() => {
      panel.setAttribute('data-open', '');
    });
  }

  close(trigger) {
    const panel = this.panelFor(trigger);
    if (!panel) return;

    trigger.setAttribute('aria-expanded', 'false');
    panel.removeAttribute('data-open');

    window.setTimeout(() => {
      if (!this.isExpanded(trigger)) {
        panel.hidden = true;
      }
    }, PANEL_TRANSITION_MS);
  }

  onTriggerClick(event) {
    const trigger = event.currentTarget;

    if (this.isExpanded(trigger)) {
      this.close(trigger);
      return;
    }

    this.triggers.forEach((t) => {
      if (t !== trigger) this.close(t);
    });
    this.open(trigger);
  }
}

if (!customElements.get('product-accordion-group')) {
  customElements.define('product-accordion-group', ProductAccordionGroup);
}
