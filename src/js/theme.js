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

// Add your own!
