// Sample deals data
const deals = [
    {
        id: 1,
        name: "Gaming Bundle Pro",
        image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
        category: "bundle",
        price: 1999.99,
        oldPrice: 2499.99,
        discount: 20,
        description: "Complete gaming setup including PC, monitor, and accessories",
        endDate: "2024-12-31"
    },
    {
        id: 2,
        name: "Clearance: Last Gen Laptops",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
        category: "clearance",
        price: 899.99,
        oldPrice: 1299.99,
        discount: 30,
        description: "Previous generation laptops at unbeatable prices",
        endDate: "2024-12-25"
    },
    {
        id: 3,
        name: "Flash Sale: Gaming Peripherals",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
        category: "flash",
        price: 149.99,
        oldPrice: 249.99,
        discount: 40,
        description: "High-performance gaming peripherals at amazing prices",
        endDate: "2024-12-20" // This date will be used for the countdown
    },
    {
        id: 4,
        name: "Office Setup Bundle",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
        category: "bundle",
        price: 1299.99,
        oldPrice: 1699.99,
        discount: 23,
        description: "Complete home office setup with ergonomic furniture",
        endDate: "2024-12-28"
    },
    {
        id: 5,
        name: "Gaming Console Bundle",
        image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
        category: "bundle",
        price: 599.99,
        oldPrice: 799.99,
        discount: 25,
        description: "Latest gaming console with games and accessories",
        endDate: "2024-12-30"
    }
];

// DOM Elements
const dealsContainer = document.getElementById('deals-container');
const filterBtns = document.querySelectorAll('.filter-btn');

// Function to display deals
function displayDeals(category = 'all') {
    dealsContainer.innerHTML = '';
    
    const filteredDeals = category === 'all' 
        ? deals 
        : deals.filter(deal => deal.category === category);

    filteredDeals.forEach(deal => {
        const dealCard = document.createElement('div');
        dealCard.className = 'deal-card';
        
        const discountBadge = `<div class="discount-badge">-${deal.discount}%</div>`;
        
        dealCard.innerHTML = `
            ${discountBadge}
            <div class="deal-image">
                <img src="${deal.image}" alt="${deal.name}">
            </div>
            <div class="deal-info">
                <h3>${deal.name}</h3>
                <div class="deal-category">${deal.category}</div>
                <p>${deal.description}</p>
                <div class="deal-price">
                    <span class="new-price">$${deal.price.toFixed(2)}</span>
                    <span class="old-price">$${deal.oldPrice.toFixed(2)}</span>
                </div>
                <button class="buy-now-btn">Buy Now</button>
            </div>
        `;
        
        dealsContainer.appendChild(dealCard);
    });
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Display filtered deals
        displayDeals(btn.getAttribute('data-filter'));
    });
});

// Initialize countdown timer
function initCountdown() {
    // Get the Flash Sale end date from the deals array
    const flashSale = deals.find(deal => deal.category === 'flash');
    const countdownDate = new Date(flashSale.endDate).getTime();
    
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "FLASH SALE HAS ENDED";
        }
    }, 1000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayDeals('all');
    initCountdown();
});

// Cart functionality
let cart = [];

// Add to cart
function addToCart(dealId) {
    const deal = deals.find(d => d.id === dealId);
    if (!deal) return;
    
    const existingItem = cart.find(item => item.id === dealId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: dealId, quantity: 1 });
    }
    
    updateCartDisplay();
    updateCartCount();
    showNotification('Item added to cart');
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        cartContent.classList.add('hidden');
        cartEmptyMessage.classList.remove('hidden');
        return;
    }
    
    cartContent.classList.remove('hidden');
    cartEmptyMessage.classList.add('hidden');
    cartItems.innerHTML = '';
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const deal = deals.find(d => d.id === item.id);
        if (!deal) return;
        
        subtotal += deal.price * item.quantity;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${deal.image}" alt="${deal.name}">
            <div class="cart-item-details">
                <h4>${deal.name}</h4>
                <div class="cart-item-price">$${deal.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${deal.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" data-id="${deal.id}">
                    <button class="quantity-btn plus" data-id="${deal.id}">+</button>
                </div>
            </div>
            <button class="remove-item" data-id="${deal.id}">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        
        cartItems.appendChild(itemElement);
    });
    
    // Calculate costs
    const shipping = subtotal > 999 ? 0 : 29.99;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    // Update summary
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    
    // Setup cart item event listeners
    setupCartEventListeners();
}

// Setup cart event listeners
function setupCartEventListeners() {
    // Quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === id);
            if (!item) return;
            
            if (e.target.classList.contains('minus') && item.quantity > 1) {
                item.quantity--;
            } else if (e.target.classList.contains('plus') && item.quantity < 99) {
                item.quantity++;
            }
            
            updateCartDisplay();
            updateCartCount();
        });
    });
    
    // Quantity input
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === id);
            if (!item) return;
            
            const newQuantity = parseInt(e.target.value);
            if (newQuantity >= 1 && newQuantity <= 99) {
                item.quantity = newQuantity;
            } else {
                e.target.value = item.quantity;
            }
            
            updateCartDisplay();
            updateCartCount();
        });
    });
    
    // Remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('.remove-item').dataset.id);
            cart = cart.filter(item => item.id !== id);
            updateCartDisplay();
            updateCartCount();
            showNotification('Item removed from cart');
        });
    });
    
    // Continue shopping buttons
    document.querySelectorAll('.continue-shopping').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('cart-modal').style.display = 'none';
        });
    });
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Add event listeners for buy now buttons
document.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const dealId = parseInt(btn.closest('.deal-card').dataset.id);
        addToCart(dealId);
    });
});

// Add event listener for cart icon
document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'block';
});

// Add event listener for close button in cart modal
document.getElementById('close-cart-modal').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Add event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty! Add some items before checking out.');
    } else {
        showNotification('Thank you! Your order has been placed.');
        cart = []; // Clear the cart after checkout
        updateCartDisplay();
        updateCartCount();
    }
});
