document.addEventListener('DOMContentLoaded', function () {
  // Check login status and show profile button
  checkLoginStatus();
  
  // Check admin access
  checkAdminAccess();
  
  // Load products from data manager
  loadProducts();
  
  // Cart functionality - make cart global to persist across page loads
  if (!window.gamezoneCart) {
    window.gamezoneCart = [];
  }
  let cart = window.gamezoneCart;
  const cartBadge = document.querySelector('.cart-badge');
  
  // Load products from data manager
  function loadProducts() {
    if (window.gameZoneData) {
      const products = window.gameZoneData.getProducts();
      renderProducts(products);
      setupDataChangeListener();
    }
  }
  
  // Render products function
  function renderProducts(products) {
    const container = document.getElementById('productsContainer');
    if (!container) return;
    
    container.innerHTML = products.map(product => {
      const priceInfo = window.gameZoneData.calculateFinalPrice(product);
      const stockStatus = product.stock > 0 ? '' : '<div class="sold-out">Sold Out</div>';
      const newBadge = product.id <= 2 ? '<div class="new-badge">New</div>' : '';
      const saleBadge = priceInfo.discount > 15 ? '<span class="sale-badge">Hot</span>' : '';
      
      return `
        <div class="card" data-product-id="${product.id}">
          <div class="card-image">
            <img src="${product.image}" alt="${product.name}">
            ${stockStatus}
            ${newBadge}
            ${saleBadge}
          </div>
          <div class="card-content">
            <h4>${product.name}</h4>
            <div class="price">
              <span class="current-price product-price">₹${priceInfo.finalPrice.toLocaleString('en-IN')}</span>
              ${priceInfo.finalPrice < product.originalPrice ? 
                `<span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                 <span class="discount-badge">-${priceInfo.discount}%</span>` : ''}
            </div>
            <button class="btn add-to-cart" onclick="addToCart('${product.name}', ${priceInfo.finalPrice}, ${product.id})" 
                    ${product.stock <= 0 ? 'disabled' : ''}>
              ${product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
            <button class="btn view-details" onclick="viewProductDetails(${product.id})">View Details</button>
          </div>
        </div>
      `;
    }).join('');
  }
  
  // Setup data change listener
  function setupDataChangeListener() {
    window.addEventListener('gamezoneDataChange', (event) => {
      const { type, action, data } = event.detail;
      
      if (type === 'product') {
        // Reload products when data changes
        const products = window.gameZoneData.getProducts();
        renderProducts(products);
        console.log('Products reloaded due to data change:', action);
      }
    });
  }
  
  // View product details
  function viewProductDetails(productId) {
    const product = window.gameZoneData.getProduct(productId);
    if (product) {
      // Store product in localStorage for product page
      localStorage.setItem('selectedProduct', JSON.stringify(product));
      window.location.href = 'product.html';
    }
  }
  
  // Make functions global
  window.viewProductDetails = viewProductDetails;
  
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
  function addToCart(productName, price, productId) {
    // Always use the global cart reference
    cart = window.gamezoneCart;
    console.log('Adding to cart:', productName, price, productId);
    console.log('Current cart:', cart);
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    console.log('Existing item index:', existingItemIndex);
    
    if (existingItemIndex > -1) {
      // Increment quantity if item exists
      cart[existingItemIndex].quantity += 1;
      console.log('Updated quantity for existing item:', cart[existingItemIndex].quantity);
    } else {
      // Add new item if it doesn't exist
      const product = window.gameZoneData.getProduct(productId);
      const newItem = {
        id: productId,
        name: productName,
        price: price,
        quantity: 1,
        image: product ? product.image : `images/${productName.toLowerCase().replace(/\s+/g, '-')}.jpg`
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
  
  // View details function
  function viewDetails(productName, price, image) {
    // Navigate to product page with product information
    const params = new URLSearchParams({
      product: productName,
      price: price,
      image: image
    });
    window.location.href = `product.html?${params.toString()}`;
  }

  // Add click event listeners to all add-to-cart and view-details buttons
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

    // Setup view-details buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details:not([disabled])');
    viewDetailsButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get product info from the card
        const card = this.closest('.card');
        const productName = card.querySelector('h4').textContent;
        const priceElement = card.querySelector('.current-price');
        const price = priceElement ? priceElement.textContent : '0';
        const imageElement = card.querySelector('.card-image img');
        const image = imageElement ? imageElement.src : 'images/product-placeholder.jpg';
        
        // Navigate to product page
        viewDetails(productName, price, image);
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

  // Check login status and show/hide profile button
  function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const profileBtn = document.getElementById('profileBtn');
    const profileName = document.getElementById('profileName');
    
    if (isLoggedIn && profileBtn) {
      const userData = localStorage.getItem('gamezone_user');
      if (userData) {
        const user = JSON.parse(userData);
        if (profileName) {
          profileName.textContent = user.name.split(' ')[0]; // Show first name only
        }
      }
      profileBtn.style.display = 'flex';
    } else if (profileBtn) {
      profileBtn.style.display = 'none';
    }
  }

  // Check admin access
  function checkAdminAccess() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const adminLinks = document.querySelectorAll('.admin-only');
    
    adminLinks.forEach(link => {
      link.style.display = isAdmin ? 'block' : 'none';
    });
  }

  // Global logout function
  window.logout = function() {
    // Clear all session data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('gamezone_user');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminUser');
    
    // Redirect to home page
    window.location.href = 'index.html';
  };
});
