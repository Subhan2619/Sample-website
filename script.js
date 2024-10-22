// Update cart count and show a message
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let cartCount = parseInt(document.querySelector('.menu a:last-child').textContent.match(/\d+/)) + 1;
        document.querySelector('.menu a:last-child').textContent = `Cart (${cartCount})`;

        // Show confirmation message
        let confirmation = document.createElement('div');
        confirmation.classList.add('confirmation');
        confirmation.textContent = "Product added to cart!";
        document.body.appendChild(confirmation);

        // Remove after 3 seconds
        setTimeout(() => {
            confirmation.remove();
        }, 3000);
    });
});
