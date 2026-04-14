/* THIRD-PARTY PACKAGES AND SETUP ********************************************/

import './modules/jquery.js';
import './modules/bootstrap.js';
import './modules/slick.js';

/* THEME *********************************************************************/

// Accordion functionality
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('accordion-toggle')) {
    const button = e.target;
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    button.setAttribute('aria-expanded', !isExpanded);
    content.hidden = isExpanded;
  }
});

// Add to cart functionality
document.addEventListener('DOMContentLoaded', () => {
    const variantSelect = document.getElementById('variant-select');
    const variantIdInput = document.getElementById('variant-id-input');
    const quantityInput = document.getElementById('quantity-input');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');

    const priceFinal = document.querySelector('.final-price');
    const priceOriginal = document.querySelector('.original-price');

    const {
        defaultVariantId,
        defaultPrice,
        defaultComparePrice,
        currency
    } = window.productData;

    /* ---------- Helpers ---------- */

    function formatMoney(cents) {
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency,
            minimumFractionDigits: 2
        }).format(cents / 100);
    }

    function getSelectedOption() {
        return variantSelect
            ? variantSelect.selectedOptions[0]
            : null;
    }

    function getVariantPrice() {
        const option = getSelectedOption();
        return option ? parseInt(option.dataset.price) : defaultPrice;
    }

    function getComparePrice() {
        const option = getSelectedOption();
        if (!option) return defaultComparePrice || null;

        const value = option.dataset.comparePrice;
        return value ? parseInt(value) : null;
    }

    /* ---------- Price Update ---------- */

    function updatePrice() {
        const quantity = parseInt(quantityInput.value);
        const price = getVariantPrice();
        const compare = getComparePrice();

        if (priceFinal) {
            priceFinal.textContent = formatMoney(price * quantity);
        }

        if (priceOriginal) {
            if (compare && compare > price) {
                priceOriginal.textContent = formatMoney(compare * quantity);
                priceOriginal.style.display = 'inline';
            } else {
                priceOriginal.style.display = 'none';
            }
        }
    }

    /* ---------- Variant Change ---------- */

    if (variantSelect) {
        variantIdInput.value = variantSelect.value;

        variantSelect.addEventListener('change', () => {
            variantIdInput.value = variantSelect.value;
            updatePrice();
        });
    } else {
        variantIdInput.value = defaultVariantId;
    }

    /* ---------- Quantity ---------- */

    incrementBtn?.addEventListener('click', () => {
        const max = parseInt(quantityInput.max);
        const value = parseInt(quantityInput.value);

        if (value < max) {
            quantityInput.value = value + 1;
            updatePrice();
        }
    });

    decrementBtn?.addEventListener('click', () => {
        const value = parseInt(quantityInput.value);

        if (value > 1) {
            quantityInput.value = value - 1;
            updatePrice();
        }
    });

    /* ---------- Add to Cart ---------- */

    document
        .getElementById('add-to-cart-form')
        ?.addEventListener('submit', async (e) => {
            e.preventDefault();

            const button = document.getElementById('add-to-cart-btn');
            const originalText = button.textContent;

            button.textContent = 'Adding...';
            button.disabled = true;

            try {
                const res = await fetch('/cart/add.js', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        items: [{
                            id: variantIdInput.value,
                            quantity: parseInt(quantityInput.value)
                        }]
                    })
                });

                if (!res.ok) throw new Error();

                button.textContent = 'Added!';

                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000);

            } catch {
                button.textContent = 'Error';
                button.disabled = false;

                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }
        });

    updatePrice();
});
