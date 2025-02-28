// Initialize modal functionality
function initializeModals() {
    // Get modal elements
    const searchModal = document.getElementById('search-modal');
    const cartModal = document.getElementById('cart-modal');
    const accountModal = document.getElementById('account-modal');
    
    // Get trigger elements
    const searchIcon = document.querySelector('.nav-icons a[href="#search"]');
    const cartIcon = document.querySelector('.nav-icons a[href="#cart"]');
    const userIcon = document.querySelector('.nav-icons a[href="#account"]');
    
    // Get close buttons
    const closeButtons = document.querySelectorAll('.close-modal');
    
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
    
    // Close button functionality
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
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
    
    // Setup account form switching
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeModals();
});