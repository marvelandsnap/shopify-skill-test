document.getElementById('add-to-cart').addEventListener('click', function() {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [
        {
          id: 123,
          quantity: 1
        }
      ]
    })
  })
  .then(response => response.json())
  .then(data => console.log('Item added to cart:', data))
  .catch(error => console.error('Error adding to cart:', error));
});
