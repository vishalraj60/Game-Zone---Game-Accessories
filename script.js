document.addEventListener('DOMContentLoaded', function () {
  // Cart functionality - make cart global to persist across page loads
  if (!window.gamezoneCart) {
    window.gamezoneCart = [];
  }
  let cart = window.gamezoneCart;
  const cartBadge = document.querySelector('.cart-badge');
  
  // Initialize cart from localStorage
  function initializeCart() {
    const savedCart = localStorage.getItem('gamezone_cart');
    console.log('Saved cart from localStorage:', savedCart);
    if (savedCart) {
      cart = JSON.parse(savedCart);
      window.gamezoneCart = cart; // Update global reference
      console.log('Parsed cart:', cart);
    } else {
      console.log('No saved cart found, starting with empty cart');
      cart = [];
      window.gamezoneCart = cart;
    }
    updateCartBadge();
  }
  
  // Update cart badge display
  function updateCartBadge() {
    if (cartBadge) {
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartBadge.textContent = totalCount;
      if (totalCount > 0) {
        cartBadge.style.display = 'inline-block';
      } else {
        cartBadge.style.display = 'none';
      }
    }
  }
  
  // Add to cart function
  function addToCart(productName, price) {
    // Always use the global cart reference
    cart = window.gamezoneCart;
    console.log('Adding to cart:', productName, price);
    console.log('Current cart:', cart);
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.name === productName);
    console.log('Existing item index:', existingItemIndex);
    
    if (existingItemIndex > -1) {
      // Increment quantity if item exists
      cart[existingItemIndex].quantity += 1;
      console.log('Updated quantity for existing item:', cart[existingItemIndex].quantity);
    } else {
      // Add new item if it doesn't exist
      const newItem = {
        name: productName,
        price: price,
        quantity: 1,
        image: `images/${productName.toLowerCase().replace(/\s+/g, '-')}.jpg`
      };
      cart.push(newItem);
      console.log('Added new item:', newItem);
    }
    
    // Update global reference
    window.gamezoneCart = cart;
    console.log('Cart after addition:', cart);
    
    // Save to localStorage
    localStorage.setItem('gamezone_cart', JSON.stringify(cart));
    updateCartBadge();
    
    // Show feedback to user
    showAddToCartFeedback(productName);
  }
  
  // Show visual feedback when item is added to cart
  function showAddToCartFeedback(productName) {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = 'cart-feedback';
    feedback.textContent = `${productName} added to cart!`;
    feedback.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #28a745, #20c997);
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: 600;
      z-index: 1000;
      animation: slideIn 0.3s ease;
      box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
    `;
    
    document.body.appendChild(feedback);
    
    // Remove feedback after 2 seconds
    setTimeout(() => {
      feedback.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        document.body.removeChild(feedback);
      }, 300);
    }, 2000);
  }
  
  // Add click event listeners to all add-to-cart buttons
  function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get product info from the card
        const card = this.closest('.card');
        const productName = card.querySelector('h4').textContent;
        const priceElement = card.querySelector('.current-price');
        const price = priceElement ? priceElement.textContent : '0';
        
        // Add to cart
        addToCart(productName, price);
        
        // Add visual feedback to button
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 100);
      });
    });
  }
  
  // Add CSS animations for feedback
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Initialize cart and setup buttons
  initializeCart();
  setupAddToCartButtons();

  // Get all category elements
  const categories = document.querySelectorAll('.glow-category');

  // Function to close all dropdowns except the current one
  function closeOtherDropdowns(currentCategory) {
    categories.forEach(category => {
      if (category !== currentCategory) {
        category.classList.remove('active');
      }
    });
  }

  // Add click event listeners for all devices
  categories.forEach(category => {
    const categoryButton = category.querySelector('span');

    // Handle click on category button
    categoryButton.addEventListener('click', function (e) {
      e.stopPropagation();
      const isActive = category.classList.contains('active');
      closeOtherDropdowns(category);

      // Toggle the clicked category
      if (!isActive) {
        category.classList.add('active');
      } else {
        category.classList.remove('active');
      }
    });

    // Handle hover for non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      category.addEventListener('mouseenter', function () {
        closeOtherDropdowns(category);
        category.classList.add('active');
      });

      category.addEventListener('mouseleave', function () {
        // Don't hide if dropdown is being hovered
        if (!category.matches(':hover')) {
          category.classList.remove('active');
        }
      });

      // Keep dropdown open when hovering over it
      const dropdown = category.querySelector('.dropdown');
      if (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
          category.classList.add('active');
        });

        dropdown.addEventListener('mouseleave', function () {
          category.classList.remove('active');
        });
      }
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.glow-category')) {
      categories.forEach(category => {
        category.classList.remove('active');
      });
    }
  });

  // Close dropdowns when pressing Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      categories.forEach(category => {
        category.classList.remove('active');
      });
    }
  });

  // Search bar clear button functionality
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');

  if (searchInput && clearBtn) {
    searchInput.addEventListener('input', function () {
      if (this.value.length > 0) {
        clearBtn.classList.add('visible');
      } else {
        clearBtn.classList.remove('visible');
      }
    });
  }

  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }
});
