let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} added to cart.`);
    updateCartTotal();
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function loadCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(cartItem);
    });
    updateCartTotal();
}

function checkout() {
    alert('Checking out');
    cart = [];
    loadCart();
}

// Load cart items on cart page load
if (window.location.pathname.includes('cart.html')) {
    loadCart();
}
