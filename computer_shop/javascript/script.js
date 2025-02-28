// Sample product data
const products = [
    {
        id: 1,
        name: "UltraTech Pro Laptop",
        image: "/api/placeholder/300/200",
        category: "laptop",
        price: 1299.99,
        oldPrice: 1499.99,
        label: "sale",
        description: "Powerful laptop for professionals with high-performance specs and sleek design.",
        specs: {
            processor: "Intel Core i7-12700H",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            display: "15.6\" 4K IPS"
        }
    },
    {
        id: 2,
        name: "PowerStation Desktop PC",
        image: "/api/placeholder/300/200",
        category: "desktop",
        price: 1799.99,
        label: "new",
        description: "High-performance desktop computer designed for demanding tasks and multitasking.",
        specs: {
            processor: "AMD Ryzen 9 5900X",
            ram: "32GB DDR4",
            storage: "1TB SSD + 2TB HDD",
            gpu: "NVIDIA RTX 3070"
        }
    },
    {
        id: 3,
        name: "GameMaster Elite PC",
        image: "/api/placeholder/300/200",
        category: "gaming",
        price: 2499.99,
        description: "Ultimate gaming PC with top-tier components for the best gaming experience.",
        specs: {
            processor: "Intel Core i9-12900K",
            ram: "64GB DDR5",
            storage: "2TB NVMe SSD",
            gpu: "NVIDIA RTX 3080 Ti"
        }
    },
    {
        id: 4,
        name: "LightBook Air",
        image: "/api/placeholder/300/200",
        category: "laptop",
        price: 899.99,
        oldPrice: 999.99,
        label: "sale",
        description: "Ultra-thin and lightweight laptop perfect for everyday use and productivity on the go.",
        specs: {
            processor: "Intel Core i5-1135G7",
            ram: "8GB LPDDR4X",
            storage: "256GB SSD",
            display: "13.3\" Full HD"
        }
    },
    {
        id: 5,
        name: "CreatorPro Workstation",
        image: "/api/placeholder/300/200",
        category: "desktop",
        price: 3299.99,
        description: "Professional workstation designed for content creators, 3D modeling, and video editing.",
        specs: {
            processor: "AMD Threadripper 3960X",
            ram: "128GB DDR4 ECC",
            storage: "4TB NVMe SSD + 8TB HDD",
            gpu: "NVIDIA RTX A5000"
        }
    },
    {
        id: 6,
        name: "EcoBook Plus",
        image: "/api/placeholder/300/200",
        category: "laptop",
        price: 1099.99,
        label: "new",
        description: "Eco-friendly laptop made with sustainable materials without compromising performance.",
        specs: {
            processor: "AMD Ryzen 7 5800U",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            display: "14\" QHD IPS"
        }
    },
    {
        id: 7,
        name: "NexGen Gaming Laptop",
        image: "/api/placeholder/300/200",
        category: "gaming",
        price: 1899.99,
        description: "Portable gaming powerhouse with desktop-class performance and high refresh rate display.",
        specs: {
            processor: "Intel Core i7-12800H",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            display: "17.3\" QHD 165Hz"
        }
    },
    {
        id: 8,
        name: "CompactMini PC",
        image: "/api/placeholder/300/200",
        category: "desktop",
        price: 699.99,
        oldPrice: 799.99,
        label: "sale",
        description: "Compact desktop PC that fits anywhere while delivering reliable performance for everyday tasks.",
        specs: {
            processor: "Intel Core i3-12100",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            gpu: "Intel UHD Graphics 730"
        }
    }
];

// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const productsContainer = document.getElementById('products-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');
const cartCount = document.getElementById('cart-count');
const newsletterForm = document.getElementById('newsletter-form');

// Cart
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts('all');
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Mobile Menu Toggle
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = mobileMenu.querySelectorAll('.bar');
        bars[0].classList.toggle('animate-top-bar');
        bars[1].classList.toggle('animate-middle-bar');
        bars[2].classList.toggle('animate-bottom-bar');
    });
    
    // Filter Products
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            displayProducts(category);
        });
    });
    
    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close Modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Newsletter Form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input').value;
            if (email) {
                alert(`Thank you for subscribing with: ${email}`);
                newsletterForm.reset();
            }
        });
    }
}

// Display Products
function displayProducts(category) {
    if (!productsContainer) return;
    
    productsContainer.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const priceHTML = product.oldPrice 
            ? `<span class="old-price">$${product.oldPrice}</span>$${product.price}` 
            : `$${product.price}`;
        
        const labelHTML = product.label 
            ? `<span class="product-label ${product.label}">${product.label}</span>` 
            : '';
        
        productCard.innerHTML = `
            ${labelHTML}
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <div class="price">${priceHTML}</div>
                <div class="product-footer">
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="quick-view" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
        
        // Add event listeners to the buttons
        productCard.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product.id);
        });
        
        productCard.querySelector('.quick-view').addEventListener('click', () => {
            openQuickView(product.id);
        });
    });
}

// Open Quick View Modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const priceHTML = product.oldPrice 
        ? `<span class="old-price">$${product.oldPrice}</span>$${product.price}` 
        : `$${product.price}`;
    
    const specsHTML = Object.entries(product.specs)
        .map(([key, value]) => `<div><span>${key.charAt(0).toUpperCase() + key.slice(1)}:</span> ${value}</div>`)
        .join('');
    
    modalBody.innerHTML = `
        <div class="product-modal">
            <div class="product-modal-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-modal-info">
                <h3>${product.name}</h3>
                <div class="category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <div class="price">${priceHTML}</div>
                <div class="product-description">
                    ${product.description}
                </div>
                <div class="product-meta">
                    ${specsHTML}
                </div>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <span class="quantity-btn minus">-</span>
                        <input type="text" class="quantity-input" value="1" readonly>
                        <span class="quantity-btn plus">+</span>
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    const quantityInput = modalBody.querySelector('.quantity-input');
    const minusBtn = modalBody.querySelector('.minus');
    const plusBtn = modalBody.querySelector('.plus');
    
    minusBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = quantity + 1;
    });
    
    modalBody.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(product.id, quantity);
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Display modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Add to Cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity
        });
    }
    
    updateCartCount();
    showNotification(`Added ${quantity} ${product.name} to cart`);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add styles for notification
const style = document.createElement('style');
style.textContent = `
.notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--primary-color);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(100px);
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    z-index: 1000;
}

.notification.show {
    transform: translateY(0);
    opacity: 1;
}

.animate-top-bar {
    transform: rotate(45deg) translate(6px, 6px);
}

.animate-middle-bar {
    opacity: 0;
}

.animate-bottom-bar {
    transform: rotate(-45deg) translate(6px, -6px);
}
`;
document.head.appendChild(style);

// Slider for hero section (optional enhancement)
class ImageSlider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        if (!this.slider) return;
        
        this.slides = this.slider.querySelectorAll('.slide');
        if (this.slides.length === 0) return;
        
        this.currentSlide = 0;
        this.autoSlideInterval = null;
        this.init();
    }
    
    init() {
        // Create navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        
        this.slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'slider-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        this.slider.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.slider-dot');
        
        // Add arrow navigation
        const prevArrow = document.createElement('div');
        prevArrow.className = 'slider-arrow prev';
        prevArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevArrow.addEventListener('click', () => this.prevSlide());
        
        const nextArrow = document.createElement('div');
        nextArrow.className = 'slider-arrow next';
        nextArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextArrow.addEventListener('click', () => this.nextSlide());
        
        this.slider.appendChild(prevArrow);
        this.slider.appendChild(nextArrow);
        
        // Start auto sliding
        this.startAutoSlide();
        
        // Pause auto slide on hover
        this.slider.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.slider.addEventListener('mouseleave', () => this.startAutoSlide());
    }
    
    goToSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        this.currentSlide = index;
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }
    
    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
    }
    
    stopAutoSlide() {
        clearInterval(this.autoSlideInterval);
    }
}

// Initialize slider if hero section has slides
document.addEventListener('DOMContentLoaded', () => {
    const slider = new ImageSlider('.hero-slider');
});
