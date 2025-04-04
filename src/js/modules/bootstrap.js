import 'bootstrap';
import { Popover, Tooltip } from 'bootstrap';

$(() => {
  const $popovers = $('[data-bs-toggle="popover"]');

  if ($popovers.length) {
    $popovers.each((index, element) => {
      new Popover(element);
    });
  }

  const $tooltips = $('[data-bs-toggle="tooltip"]');

  if ($tooltips.length) {
    $tooltips.each((index, element) => {
      new Tooltip(element);
    });
  }
});
