// Sample product data
const products = [
    {
        id: 1,
        name: "MacBook Pro 16-inch M2 Pro",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "laptop",
        price: 2499.99,
        oldPrice: 2699.99,
        label: "sale",
        description: "The most powerful MacBook Pro ever with the M2 Pro chip for groundbreaking performance.",
        specs: {
            processor: "Apple M2 Pro 12-core CPU",
            ram: "16GB Unified Memory",
            storage: "512GB SSD",
            display: "16-inch Liquid Retina XDR"
        }
    },
    {
        id: 2,
        name: "Dell XPS Desktop",
        image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "desktop",
        price: 1799.99,
        label: "new",
        description: "Premium desktop workstation with the latest Intel processor and NVIDIA graphics.",
        specs: {
            processor: "Intel Core i7-13700K",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD + 2TB HDD",
            gpu: "NVIDIA RTX 4070"
        }
    },
    {
        id: 3,
        name: "Alienware Aurora R15",
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 2999.99,
        description: "Ultimate gaming desktop with liquid cooling and premium components.",
        specs: {
            processor: "Intel Core i9-13900KF",
            ram: "64GB DDR5",
            storage: "2TB NVMe SSD",
            gpu: "NVIDIA RTX 4090"
        }
    },
    {
        id: 4,
        name: "Dell XPS 13 Plus",
        image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",  // Updated image URL
        category: "laptop",
        price: 1299.99,
        oldPrice: 1499.99,
        label: "sale",
        description: "Ultra-portable laptop with InfinityEdge display and capacitive touch function row.",
        specs: {
            processor: "Intel Core i7-1260P",
            ram: "16GB LPDDR5",
            storage: "512GB SSD",
            display: "13.4\" 3.5K OLED Touch"
        }
    },
    {
        id: 5,
        name: "HP Z6 G4 Workstation",
        image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "desktop",
        price: 4299.99,
        description: "Professional workstation for 3D rendering, CAD, and content creation.",
        specs: {
            processor: "Intel Xeon W-3365",
            ram: "128GB DDR4 ECC",
            storage: "4TB NVMe SSD + 8TB HDD",
            gpu: "NVIDIA RTX A5000"
        }
    },
    {
        id: 6,
        name: "Lenovo ThinkPad X1 Carbon Gen 11",
        image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "laptop",
        price: 1599.99,
        label: "new",
        description: "Business laptop with military-grade durability and premium features.",
        specs: {
            processor: "Intel Core i7-1355U",
            ram: "16GB LPDDR5",
            storage: "1TB SSD",
            display: "14\" 2.8K OLED"
        }
    },
    {
        id: 7,
        name: "ROG Strix G17",
        image: "https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 2199.99,
        description: "High-performance gaming laptop with AMD advantage.",
        specs: {
            processor: "AMD Ryzen 9 7945HX",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            display: "17.3\" QHD 240Hz"
        }
    },
    {
        id: 8,
        name: "Intel NUC 13 Pro",
        image: "https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "desktop",
        price: 799.99,
        oldPrice: 899.99,
        label: "sale",
        description: "Compact but powerful mini PC for productivity and entertainment.",
        specs: {
            processor: "Intel Core i7-1360P",
            ram: "16GB DDR4",
            storage: "512GB NVMe SSD",
            gpu: "Intel Iris Xe Graphics"
        }
    },
    {
        id: 9,
        name: "MSI MEG Aegis Ti5",
        image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 4499.99,
        label: "new",
        description: "Ultimate gaming desktop with futuristic design and top-tier performance.",
        specs: {
            processor: "Intel Core i9-13900K",
            ram: "64GB DDR5",
            storage: "2TB NVMe SSD + 3TB HDD",
            gpu: "NVIDIA RTX 4090"
        }
    },
    {
        id: 10,
        name: "Razer Blade 18",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 3999.99,
        description: "Desktop replacement gaming laptop with stunning 18-inch display.",
        specs: {
            processor: "Intel Core i9-13950HX",
            ram: "32GB DDR5",
            storage: "2TB NVMe SSD",
            display: "18\" QHD+ 240Hz"
        }
    },
    {
        id: 11,
        name: "Corsair One i300",
        image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 3799.99,
        description: "Compact yet powerful gaming PC with liquid cooling.",
        specs: {
            processor: "Intel Core i9-12900K",
            ram: "64GB DDR5",
            storage: "2TB NVMe SSD",
            gpu: "NVIDIA RTX 3080 Ti"
        }
    },
    {
        id: 12,
        name: "Apple Mac Studio",
        image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "desktop",
        price: 3999.99,
        label: "new",
        description: "Professional desktop with revolutionary Apple Silicon.",
        specs: {
            processor: "Apple M2 Ultra",
            ram: "128GB Unified Memory",
            storage: "4TB SSD",
            gpu: "38-core GPU"
        }
    },
    {
        id: 13,
        name: "Alienware x16",
        image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 2899.99,
        oldPrice: 3199.99,
        label: "sale",
        description: "Premium gaming laptop with advanced cooling technology.",
        specs: {
            processor: "Intel Core i9-13900HK",
            ram: "32GB DDR5",
            storage: "2TB NVMe SSD",
            display: "16\" QHD+ 240Hz"
        }
    },
    {
        id: 14,
        name: "ASUS ProArt Station",
        image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "desktop",
        price: 4299.99,
        description: "Professional workstation for content creators.",
        specs: {
            processor: "Intel Core i9-13900K",
            ram: "128GB DDR5",
            storage: "4TB NVMe SSD",
            gpu: "NVIDIA RTX 4080"
        }
    },
    {
        id: 15,
        name: "Legion Tower 7i",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 3299.99,
        label: "new",
        description: "Powerful gaming tower with RGB lighting and premium cooling.",
        specs: {
            processor: "Intel Core i9-13900KF",
            ram: "64GB DDR5",
            storage: "2TB NVMe SSD + 2TB HDD",
            gpu: "NVIDIA RTX 4080"
        }
    },
    {
        id: 16,
        name: "HP Omen 45L",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 2899.99,
        oldPrice: 3199.99,
        label: "sale",
        description: "Gaming desktop with Cryo Chamber cooling technology.",
        specs: {
            processor: "AMD Ryzen 9 7950X",
            ram: "32GB DDR5",
            storage: "2TB NVMe SSD",
            gpu: "NVIDIA RTX 4070 Ti"
        }
    },
    {
        id: 17,
        name: "ROG Zephyrus M16",
        image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "laptop",
        price: 2499.99,
        description: "Ultra-slim gaming laptop with Mini LED display.",
        specs: {
            processor: "Intel Core i9-13900H",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            display: "16\" QHD+ 240Hz Mini LED"
        }
    },
    {
        id: 18,
        name: "iMac 24-inch",
        image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "desktop",
        price: 1899.99,
        description: "Sleek all-in-one desktop with M2 chip.",
        specs: {
            processor: "Apple M2 8-core",
            ram: "16GB Unified Memory",
            storage: "512GB SSD",
            display: "24\" 4.5K Retina"
        }
    },
    {
        id: 19,
        name: "Razer Blade 14",
        image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "laptop",
        price: 2299.99,
        oldPrice: 2499.99,
        label: "sale",
        description: "Compact gaming laptop with NVIDIA Studio drivers.",
        specs: {
            processor: "AMD Ryzen 9 7940HS",
            ram: "32GB DDR5",
            storage: "1TB NVMe SSD",
            display: "14\" QHD 240Hz"
        }
    },
    {
        id: 20,
        name: "ThinkStation P620",
        image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "desktop",
        price: 4999.99,
        description: "Professional workstation for intensive tasks.",
        specs: {
            processor: "AMD Threadripper PRO 5995WX",
            ram: "128GB DDR4 ECC",
            storage: "4TB NVMe SSD",
            gpu: "NVIDIA RTX A6000"
        }
    },
    {
        id: 21,
        name: "MacBook Pro 14",
        image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "laptop",
        price: 1999.99,
        description: "Powerful laptop with stunning display.",
        specs: {
            processor: "Apple M2 Pro",
            ram: "32GB Unified Memory",
            storage: "1TB SSD",
            display: "14\" Liquid Retina XDR"
        }
    },
    {
        id: 22,
        name: "ROG Strix G15",
        image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 1799.99,
        oldPrice: 1999.99,
        label: "sale",
        description: "Affordable gaming laptop with premium features.",
        specs: {
            processor: "AMD Ryzen 9 7945HX",
            ram: "16GB DDR5",
            storage: "1TB NVMe SSD",
            display: "15.6\" FHD 300Hz"
        }
    },
    {
        id: 23,
        name: "Mac Mini",
        image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "desktop",
        price: 799.99,
        description: "Compact desktop with M2 chip.",
        specs: {
            processor: "Apple M2",
            ram: "16GB Unified Memory",
            storage: "512GB SSD",
            gpu: "10-core GPU"
        }
    },
    {
        id: 24,
        name: "Surface Laptop Studio",
        image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "laptop",
        price: 2199.99,
        label: "new",
        description: "Versatile laptop with unique form factor.",
        specs: {
            processor: "Intel Core i7-12700H",
            ram: "32GB DDR4",
            storage: "1TB NVMe SSD",
            display: "14.4\" 120Hz Touch"
        }
    },
    {
        id: 25,
        name: "Origin Neuron",
        image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        price: 3499.99,
        description: "Custom gaming PC with premium components.",
        specs: {
            processor: "Intel Core i9-13900KS",
            ram: "64GB DDR5",
            storage: "2TB NVMe SSD + 4TB HDD",
            gpu: "NVIDIA RTX 4080"
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
    setupModals();
    setupSearch();
    setupAccount();
    setupCheckout();
    setupPaymentValidation();
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
            ? `<div class="price"><span class="old-price">$${product.oldPrice.toFixed(2)}</span> $${product.price.toFixed(2)}</div>`
            : `<div class="price">$${product.price.toFixed(2)}</div>`;
        
        const labelHTML = product.label 
            ? `<span class="product-label ${product.label}">${product.label}</span>` 
            : '';
        
        productCard.innerHTML = `
            ${labelHTML}
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                ${priceHTML}
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

// Modal functionality
function setupModals() {
    const searchIcon = document.querySelector('.nav-icons a[href="#search"]');
    const cartIcon = document.querySelector('.nav-icons a[href="#cart"]');
    const userIcon = document.querySelector('.nav-icons a[href="#account"]');
    
    const searchModal = document.getElementById('search-modal');
    const cartModal = document.getElementById('cart-modal');
    const accountModal = document.getElementById('account-modal');
    
    // Setup modal triggers
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault();
        searchModal.style.display = 'block';
        document.getElementById('search-input').focus();
    });
    
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.style.display = 'block';
        updateCartDisplay();
    });
    
    userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        accountModal.style.display = 'block';
    });
    
    // Close modals
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            searchModal.style.display = 'none';
            cartModal.style.display = 'none';
            accountModal.style.display = 'none';
        });
    });
    
    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === searchModal || e.target === cartModal || e.target === accountModal) {
            searchModal.style.display = 'none';
            cartModal.style.display = 'none';
            accountModal.style.display = 'none';
        }
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const searchCategory = document.getElementById('search-category');
    const searchSort = document.getElementById('search-sort');
    const searchStatus = document.getElementById('search-status');
    const searchCount = document.querySelector('.search-count');
    const searchLoading = document.querySelector('.search-loading');
    const searchGrid = document.getElementById('search-grid');
    const searchEmpty = document.getElementById('search-empty');
    
    let searchTimeout;
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const category = searchCategory.value;
        const sortBy = searchSort.value;
        
        // Show loading state
        searchLoading.classList.remove('hidden');
        searchGrid.innerHTML = '';
        searchEmpty.classList.add('hidden');
        searchStatus.classList.remove('hidden');
        
        // Simulate network delay
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            let results = products.filter(product => {
                const matchesQuery = product.name.toLowerCase().includes(query) ||
                                   product.description.toLowerCase().includes(query);
                const matchesCategory = !category || product.category === category;
                return matchesQuery && matchesCategory;
            });
            
            // Sort results
            results = sortResults(results, sortBy);
            
            // Update status
            searchLoading.classList.add('hidden');
            searchCount.textContent = `${results.length} products found`;
            
            if (results.length === 0) {
                searchGrid.classList.add('hidden');
                searchEmpty.classList.remove('hidden');
                return;
            }
            
            // Display results
            searchGrid.classList.remove('hidden');
            results.forEach(product => {
                const card = createSearchResultCard(product);
                searchGrid.appendChild(card);
            });
        }, 300); // Simulate network delay
    }
    
    function sortResults(results, sortBy) {
        switch (sortBy) {
            case 'price-asc':
                return results.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return results.sort((a, b) => b.price - a.price);
            case 'name-asc':
                return results.sort((a, b) => a.name.localeCompare(b.name));
            default:
                return results; // Keep original order for relevance
        }
    }
    
    function createSearchResultCard(product) {
        const card = document.createElement('div');
        card.className = 'search-result-card';
        
        const priceDisplay = product.oldPrice 
            ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span> $${product.price.toFixed(2)}`
            : `$${product.price.toFixed(2)}`;
            
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="search-result-image">
            <div class="search-result-info">
                <div class="search-result-name">${product.name}</div>
                <div class="search-result-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <div class="search-result-price">${priceDisplay}</div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            openQuickView(product.id);
        });
        
        return card;
    }
    
    // Input event listeners
    searchInput.addEventListener('input', () => {
        searchClear.classList.toggle('hidden', !searchInput.value);
        performSearch();
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Clear button
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchClear.classList.add('hidden');
        searchInput.focus();
        performSearch();
    });
    
    // Filter changes
    searchCategory.addEventListener('change', performSearch);
    searchSort.addEventListener('change', performSearch);
    
    // Focus input when modal opens
    document.querySelector('a[href="#search"]').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('search-modal').style.display = 'block';
        searchInput.focus();
    });
}

// Cart functionality
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartContent = document.getElementById('cart-content');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const subtotalElement = document.getElementById('cart-subtotal');
    const shippingElement = document.getElementById('cart-shipping');
    const taxElement = document.getElementById('cart-tax');
    const totalElement = document.getElementById('cart-total');
    
    // Clear existing items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartContent.classList.add('hidden');
        cartEmptyMessage.classList.remove('hidden');
        return;
    }
    
    cartContent.classList.remove('hidden');
    cartEmptyMessage.classList.add('hidden');
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
        
        subtotal += product.price * item.quantity;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-details">
                <h4>${product.name}</h4>
                <div class="cart-item-price">$${product.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${product.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" data-id="${product.id}">
                    <button class="quantity-btn plus" data-id="${product.id}">+</button>
                </div>
            </div>
            <button class="remove-item" data-id="${product.id}">
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
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    shippingElement.textContent = `$${shipping.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
    
    // Setup event listeners for quantity buttons and remove buttons
    setupCartEventListeners();
}

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

// Account functionality
function setupAccount() {
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
    
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
}

function setupCheckout() {
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutForm = document.getElementById('checkout-form');
    const modalContent = checkoutModal.querySelector('.modal-content');
    const modalHeader = modalContent.querySelector('.modal-header');

    // Variables for dragging
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    // Mouse events for dragging
    modalHeader.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === modalHeader || e.target.parentNode === modalHeader) {
            isDragging = true;
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, modalContent);
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }

    // Existing checkout functionality
    checkoutBtn.addEventListener('click', () => {
        // Reset position when opening modal
        xOffset = 0;
        yOffset = 0;
        setTranslate(0, 0, modalContent);
        
        document.getElementById('cart-modal').style.display = 'none';
        checkoutModal.style.display = 'block';
        updateCheckoutSummary();
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        processOrder();
    });

    // Update close modal functionality
    const closeModal = modalContent.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });
}

function updateCheckoutSummary() {
    const checkoutItems = document.getElementById('checkout-items');
    const subtotalElement = document.getElementById('checkout-subtotal');
    const shippingElement = document.getElementById('checkout-shipping');
    const taxElement = document.getElementById('checkout-tax');
    const totalElement = document.getElementById('checkout-total');

    // Clear existing items
    checkoutItems.innerHTML = '';

    // Calculate subtotal and display items
    let subtotal = 0;
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        subtotal += product.price * item.quantity;

        const itemElement = document.createElement('div');
        itemElement.className = 'checkout-item';
        itemElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="checkout-item-details">
                <h4>${product.name}</h4>
                <p>$${product.price} x ${item.quantity}</p>
            </div>
        `;
        checkoutItems.appendChild(itemElement);
    });

    // Calculate additional costs
    const shipping = subtotal > 999 ? 0 : 29.99;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;

    // Update summary
    subtotalElement.textContent = subtotal.toFixed(2);
    shippingElement.textContent = shipping.toFixed(2);
    taxElement.textContent = tax.toFixed(2);
    totalElement.textContent = total.toFixed(2);
}

function processOrder() {
    // Get form data
    const formData = new FormData(document.getElementById('checkout-form'));
    const orderData = Object.fromEntries(formData.entries());

    // Here you would typically send this data to your backend
    // For now, we'll just show a success message and clear the cart
    alert('Order placed successfully! Thank you for your purchase.');
    
    // Clear cart
    cart = [];
    updateCartCount();
    
    // Close checkout modal
    document.getElementById('checkout-modal').style.display = 'none';
    
    // Reset form
    document.getElementById('checkout-form').reset();
}

function setupPaymentValidation() {
    const cardNumber = document.getElementById('cardNumber');
    const expiry = document.getElementById('expiry');
    const cvv = document.getElementById('cvv');
    const cardName = document.getElementById('cardName');
    const cardIcons = document.querySelectorAll('.card-icons i');

    // Card number formatting and validation
    cardNumber.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';
        
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        
        e.target.value = formattedValue;
        
        // Detect card type
        const cardType = detectCardType(value);
        updateCardIcon(cardType);
    });

    // Expiry date formatting and validation
    expiry.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length >= 2) {
            const month = parseInt(value.substr(0, 2));
            if (month > 12) {
                value = '12' + value.substr(2);
            }
            value = value.substr(0, 2) + '/' + value.substr(2);
        }
        
        e.target.value = value;
    });

    // CVV validation
    cvv.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').substr(0, 4);
    });

    // Card name validation
    cardName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[0-9]/g, '');
    });

    function detectCardType(number) {
        const patterns = {
            visa: /^4/,
            mastercard: /^5[1-5]/,
            amex: /^3[47]/,
            discover: /^6(?:011|5)/
        };

        for (const [card, pattern] of Object.entries(patterns)) {
            if (pattern.test(number)) {
                return card;
            }
        }
        return null;
    }

    function updateCardIcon(cardType) {
        cardIcons.forEach(icon => {
            icon.classList.remove('active');
            if (cardType && icon.dataset.card === cardType) {
                icon.classList.add('active');
            }
        });
    }

    // Validate form before submission
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        if (!validatePaymentForm()) {
            e.preventDefault();
        }
    });

    function validatePaymentForm() {
        let isValid = true;
        
        // Card number validation (Luhn algorithm)
        const cardNumberValue = cardNumber.value.replace(/\s/g, '');
        if (!isValidLuhn(cardNumberValue)) {
            showError(cardNumber, 'Invalid card number');
            isValid = false;
        }

        // Expiry validation
        const [month, year] = expiry.value.split('/');
        const now = new Date();
        const currentYear = now.getFullYear() % 100;
        const currentMonth = now.getMonth() + 1;

        if (!month || !year || 
            parseInt(year) < currentYear || 
            (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
            showError(expiry, 'Invalid expiry date');
            isValid = false;
        }

        // CVV validation
        if (cvv.value.length < 3) {
            showError(cvv, 'Invalid CVV');
            isValid = false;
        }

        return isValid;
    }

    function isValidLuhn(number) {
        let sum = 0;
        let isEven = false;
        
        for (let i = number.length - 1; i >= 0; i--) {
            let digit = parseInt(number[i]);
            
            if (isEven) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            
            sum += digit;
            isEven = !isEven;
        }
        
        return sum % 10 === 0;
    }

    function showError(element, message) {
        element.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        element.parentNode.appendChild(errorDiv);
        
        setTimeout(() => {
            element.classList.remove('error');
            errorDiv.remove();
        }, 3000);
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    setupModals();
    setupSearch();
    setupAccount();
    setupCheckout();
    setupPaymentValidation();
    
    // Setup cart modal toggle
    const cartIcon = document.querySelector('.nav-icons .fa-shopping-cart').parentElement;
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        const cartModal = document.getElementById('cart-modal');
        cartModal.style.display = 'block';
        updateCartDisplay();
    });
});
