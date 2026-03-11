// GameZone Data Manager
// Centralized data storage and management system

class GameZoneDataManager {
    constructor() {
        this.initializeData();
    }

    initializeData() {
        // Initialize default products if not exists
        if (!localStorage.getItem('gamezone_products')) {
            const defaultProducts = [
                {
                    id: 1,
                    name: 'RGB Gaming Keyboard',
                    price: 6549,
                    originalPrice: 7999,
                    stock: 45,
                    category: 'Keyboards',
                    status: 'active',
                    image: 'images/keyboard.jpg',
                    description: 'Mechanical RGB gaming keyboard with customizable backlighting',
                    features: ['Mechanical switches', 'RGB backlighting', 'Programmable keys'],
                    discount: 18,
                    sku: 'GZ-KB-001',
                    brand: 'GameZone Pro'
                },
                {
                    id: 2,
                    name: 'Wireless Gaming Mouse',
                    price: 5699,
                    originalPrice: 6999,
                    stock: 32,
                    category: 'Mouse',
                    status: 'active',
                    image: 'images/mouse.jpg',
                    description: 'High-precision wireless gaming mouse with 16000 DPI',
                    features: ['16000 DPI', 'Wireless', 'Ergonomic design'],
                    discount: 19,
                    sku: 'GZ-MS-002',
                    brand: 'GameZone Pro'
                },
                {
                    id: 3,
                    name: 'Gaming Headset',
                    price: 6499,
                    originalPrice: 7999,
                    stock: 28,
                    category: 'Audio',
                    status: 'active',
                    image: 'images/headset.jpg',
                    description: '7.1 surround sound gaming headset with noise cancellation',
                    features: ['7.1 surround sound', 'Noise cancellation', 'RGB lighting'],
                    discount: 19,
                    sku: 'GZ-HS-003',
                    brand: 'GameZone Pro'
                },
                {
                    id: 4,
                    name: 'Graphics Card',
                    price: 47999,
                    originalPrice: 54999,
                    stock: 12,
                    category: 'Components',
                    status: 'active',
                    image: 'images/graphics card.jpg',
                    description: 'High-performance graphics card for gaming',
                    features: ['8GB GDDR6', 'Ray tracing', 'DLSS support'],
                    discount: 13,
                    sku: 'GZ-GC-004',
                    brand: 'GameZone Pro'
                },
                {
                    id: 5,
                    name: 'Gaming Chair',
                    price: 31999,
                    originalPrice: 39999,
                    stock: 15,
                    category: 'Furniture',
                    status: 'active',
                    image: 'images/gaming-chair.png',
                    description: 'Ergonomic gaming chair with lumbar support',
                    features: ['Ergonomic design', 'Lumbar support', 'Adjustable armrests'],
                    discount: 20,
                    sku: 'GZ-CH-005',
                    brand: 'GameZone Pro'
                },
                {
                    id: 6,
                    name: 'Gaming Monitor',
                    price: 14499,
                    originalPrice: 17999,
                    stock: 22,
                    category: 'Displays',
                    status: 'active',
                    image: 'images/gaming-monitor.png',
                    description: '27-inch gaming monitor with 144Hz refresh rate',
                    features: ['27" display', '144Hz', '1ms response time'],
                    discount: 19,
                    sku: 'GZ-MN-006',
                    brand: 'GameZone Pro'
                },
                {
                    id: 7,
                    name: 'Gaming Controller',
                    price: 4299,
                    originalPrice: 5299,
                    stock: 35,
                    category: 'Controllers',
                    status: 'active',
                    image: 'images/controller.jpg',
                    description: 'Wireless gaming controller with precision controls',
                    features: ['Wireless', 'Precision controls', 'Vibration feedback'],
                    discount: 19,
                    sku: 'GZ-CT-007',
                    brand: 'GameZone Pro'
                },
                {
                    id: 8,
                    name: 'Gaming Microphone',
                    price: 3499,
                    originalPrice: 4299,
                    stock: 18,
                    category: 'Audio',
                    status: 'active',
                    image: 'images/gaming mic.jpeg',
                    description: 'Professional gaming microphone with studio quality',
                    features: ['Studio quality', 'Pop filter', 'USB connection'],
                    discount: 19,
                    sku: 'GZ-MC-008',
                    brand: 'GameZone Pro'
                },
                {
                    id: 9,
                    name: 'Gaming Mousepad',
                    price: 1299,
                    originalPrice: 1899,
                    stock: 50,
                    category: 'Accessories',
                    status: 'active',
                    image: 'images/gaming-mousepad.png',
                    description: 'Extended gaming mousepad with RGB lighting',
                    features: ['Extended size', 'RGB lighting', 'Non-slip base'],
                    discount: 32,
                    sku: 'GZ-MP-009',
                    brand: 'GameZone Pro'
                },
                {
                    id: 10,
                    name: 'Gaming Speakers',
                    price: 5999,
                    originalPrice: 7499,
                    stock: 25,
                    category: 'Audio',
                    status: 'active',
                    image: 'images/gaming-speakers.png',
                    description: '2.1 gaming speaker system with powerful bass',
                    features: ['2.1 system', 'Powerful bass', 'RGB lighting'],
                    discount: 20,
                    sku: 'GZ-SP-010',
                    brand: 'GameZone Pro'
                },
                {
                    id: 11,
                    name: 'Gaming Webcam',
                    price: 4499,
                    originalPrice: 5999,
                    stock: 20,
                    category: 'Accessories',
                    status: 'active',
                    image: 'images/gaming-webcam.png',
                    description: '1080p gaming webcam with auto-focus',
                    features: ['1080p resolution', 'Auto-focus', 'Noise reduction'],
                    discount: 25,
                    sku: 'GZ-WC-011',
                    brand: 'GameZone Pro'
                },
                {
                    id: 12,
                    name: 'Gaming CPU',
                    price: 28999,
                    originalPrice: 34999,
                    stock: 8,
                    category: 'Components',
                    status: 'active',
                    image: 'images/gmaing cpu.jpeg',
                    description: 'High-performance gaming processor',
                    features: ['8 cores', '3.8GHz', 'Unlocked'],
                    discount: 17,
                    sku: 'GZ-CPU-012',
                    brand: 'GameZone Pro'
                },
                {
                    id: 13,
                    name: 'Gaming RAM',
                    price: 8999,
                    originalPrice: 10999,
                    stock: 30,
                    category: 'Components',
                    status: 'active',
                    image: 'images/gmaing ram.jpeg',
                    description: '16GB DDR4 gaming RAM with RGB',
                    features: ['16GB DDR4', 'RGB lighting', '3200MHz'],
                    discount: 18,
                    sku: 'GZ-RAM-013',
                    brand: 'GameZone Pro'
                },
                {
                    id: 14,
                    name: 'Gaming CPU Cooler',
                    price: 3999,
                    originalPrice: 4999,
                    stock: 22,
                    category: 'Components',
                    status: 'active',
                    image: 'images/cooler.jpeg',
                    description: 'Liquid CPU cooler for gaming systems',
                    features: ['Liquid cooling', 'RGB pump', '120mm radiator'],
                    discount: 20,
                    sku: 'GZ-CL-014',
                    brand: 'GameZone Pro'
                },
                {
                    id: 15,
                    name: 'PS5 Controller',
                    price: 5999,
                    originalPrice: 6999,
                    stock: 28,
                    category: 'Controllers',
                    status: 'active',
                    image: 'images/ps5-controller.png',
                    description: 'Official PS5 DualSense controller',
                    features: ['Haptic feedback', 'Adaptive triggers', 'USB-C charging'],
                    discount: 14,
                    sku: 'GZ-PS5-015',
                    brand: 'Sony'
                },
                {
                    id: 16,
                    name: 'Gaming Joystick',
                    price: 3499,
                    originalPrice: 4299,
                    stock: 15,
                    category: 'Controllers',
                    status: 'active',
                    image: 'images/joysticks.jpeg',
                    description: 'Flight stick gaming joystick',
                    features: ['Flight controls', 'Throttle control', 'USB connection'],
                    discount: 19,
                    sku: 'GZ-JS-016',
                    brand: 'GameZone Pro'
                },
                {
                    id: 17,
                    name: 'Gaming Steering Wheel',
                    price: 18999,
                    originalPrice: 24999,
                    stock: 10,
                    category: 'Controllers',
                    status: 'active',
                    image: 'images/stearing.jpeg',
                    description: 'Racing wheel with force feedback',
                    features: ['Force feedback', '270° rotation', 'Pedal set'],
                    discount: 24,
                    sku: 'GZ-SW-017',
                    brand: 'GameZone Pro'
                },
                {
                    id: 18,
                    name: 'AMD Ryzen Processor',
                    price: 31999,
                    originalPrice: 38999,
                    stock: 12,
                    category: 'Components',
                    status: 'active',
                    image: 'images/AMD ryzen .jpeg',
                    description: 'AMD Ryzen 7 gaming processor',
                    features: ['8 cores', '16 threads', '3.6GHz base'],
                    discount: 18,
                    sku: 'GZ-RZ-018',
                    brand: 'AMD'
                }
            ];
            localStorage.setItem('gamezone_products', JSON.stringify(defaultProducts));
        }

        // Initialize default offers if not exists
        if (!localStorage.getItem('gamezone_offers')) {
            const defaultOffers = [
                {
                    id: 1,
                    title: 'Weekend Gaming Sale',
                    description: 'Get up to 25% off on all gaming accessories',
                    discount: 25,
                    type: 'percentage',
                    applicableCategories: ['all'],
                    startDate: '2024-01-20',
                    endDate: '2024-12-31',
                    status: 'active',
                    code: 'WEEKEND25',
                    minAmount: 0
                },
                {
                    id: 2,
                    title: 'New Year Special',
                    description: 'Flat ₹1000 off on purchases above ₹5000',
                    discount: 1000,
                    type: 'fixed',
                    minAmount: 5000,
                    applicableCategories: ['all'],
                    startDate: '2024-01-01',
                    endDate: '2024-12-31',
                    status: 'active',
                    code: 'NEW2024'
                }
            ];
            localStorage.setItem('gamezone_offers', JSON.stringify(defaultOffers));
        }

        // Initialize orders if not exists
        if (!localStorage.getItem('gamezone_orders')) {
            localStorage.setItem('gamezone_orders', JSON.stringify([]));
        }
    }

    // Product Management
    getProducts() {
        return JSON.parse(localStorage.getItem('gamezone_products') || '[]');
    }

    getProduct(id) {
        const products = this.getProducts();
        return products.find(p => p.id === parseInt(id));
    }

    updateProduct(id, updates) {
        const products = this.getProducts();
        const index = products.findIndex(p => p.id === parseInt(id));
        if (index !== -1) {
            products[index] = { ...products[index], ...updates };
            localStorage.setItem('gamezone_products', JSON.stringify(products));
            this.notifyDataChange('product', 'update', products[index]);
            return true;
        }
        return false;
    }

    addProduct(product) {
        const products = this.getProducts();
        const newId = Math.max(...products.map(p => p.id), 0) + 1;
        const newProduct = { id: newId, ...product };
        products.push(newProduct);
        localStorage.setItem('gamezone_products', JSON.stringify(products));
        this.notifyDataChange('product', 'add', newProduct);
        return newProduct;
    }

    deleteProduct(id) {
        const products = this.getProducts();
        const deletedProduct = products.find(p => p.id === parseInt(id));
        const filteredProducts = products.filter(p => p.id !== parseInt(id));
        localStorage.setItem('gamezone_products', JSON.stringify(filteredProducts));
        if (deletedProduct) {
            this.notifyDataChange('product', 'delete', deletedProduct);
        }
        return true;
    }

    // Offer Management
    getOffers() {
        return JSON.parse(localStorage.getItem('gamezone_offers') || '[]');
    }

    getActiveOffers() {
        const offers = this.getOffers();
        const now = new Date();
        return offers.filter(offer => {
            return offer.status === 'active' && 
                   new Date(offer.startDate) <= now && 
                   new Date(offer.endDate) >= now;
        });
    }

    updateOffer(id, updates) {
        const offers = this.getOffers();
        const index = offers.findIndex(o => o.id === parseInt(id));
        if (index !== -1) {
            offers[index] = { ...offers[index], ...updates };
            localStorage.setItem('gamezone_offers', JSON.stringify(offers));
            this.notifyDataChange('offer', 'update', offers[index]);
            return true;
        }
        return false;
    }

    addOffer(offer) {
        const offers = this.getOffers();
        const newId = Math.max(...offers.map(o => o.id), 0) + 1;
        const newOffer = { id: newId, ...offer };
        offers.push(newOffer);
        localStorage.setItem('gamezone_offers', JSON.stringify(offers));
        this.notifyDataChange('offer', 'add', newOffer);
        return newOffer;
    }

    deleteOffer(id) {
        const offers = this.getOffers();
        const deletedOffer = offers.find(o => o.id === parseInt(id));
        const filteredOffers = offers.filter(o => o.id !== parseInt(id));
        localStorage.setItem('gamezone_offers', JSON.stringify(filteredOffers));
        if (deletedOffer) {
            this.notifyDataChange('offer', 'delete', deletedOffer);
        }
        return true;
    }

    // Price calculation with offers
    calculateFinalPrice(product, offers = null) {
        if (!offers) {
            offers = this.getActiveOffers();
        }

        let finalPrice = product.price;
        let applicableOffers = [];

        for (const offer of offers) {
            if (offer.applicableCategories.includes('all') || 
                offer.applicableCategories.includes(product.category)) {
                
                if (offer.type === 'percentage') {
                    const discount = (product.price * offer.discount) / 100;
                    finalPrice = Math.min(finalPrice, product.price - discount);
                } else if (offer.type === 'fixed' && product.price >= offer.minAmount) {
                    finalPrice = Math.min(finalPrice, product.price - offer.discount);
                }
                applicableOffers.push(offer);
            }
        }

        return {
            originalPrice: product.originalPrice,
            basePrice: product.price,
            finalPrice: Math.max(finalPrice, 0),
            discount: Math.round(((product.originalPrice - finalPrice) / product.originalPrice) * 100),
            applicableOffers: applicableOffers
        };
    }

    // Order Management
    getOrders() {
        return JSON.parse(localStorage.getItem('gamezone_orders') || '[]');
    }

    addOrder(order) {
        const orders = this.getOrders();
        const newId = Math.max(...orders.map(o => o.id || 0), 0) + 1;
        const newOrder = { 
            id: newId, 
            ...order, 
            createdAt: new Date().toISOString(),
            status: 'pending'
        };
        orders.push(newOrder);
        localStorage.setItem('gamezone_orders', JSON.stringify(orders));
        this.notifyDataChange('order', 'add', newOrder);
        return newOrder;
    }

    updateOrder(id, updates) {
        const orders = this.getOrders();
        const index = orders.findIndex(o => o.id === parseInt(id));
        if (index !== -1) {
            orders[index] = { ...orders[index], ...updates };
            localStorage.setItem('gamezone_orders', JSON.stringify(orders));
            this.notifyDataChange('order', 'update', orders[index]);
            return true;
        }
        return false;
    }

    // Data change notification system
    notifyDataChange(type, action, data) {
        // Create custom event for data changes
        const event = new CustomEvent('gamezoneDataChange', {
            detail: { type, action, data }
        });
        window.dispatchEvent(event);
        
        // Log changes for debugging
        console.log(`GameZone Data Change: ${type} ${action}`, data);
    }

    // Export data for admin
    exportData() {
        return {
            products: this.getProducts(),
            offers: this.getOffers(),
            orders: this.getOrders()
        };
    }

    // Import data for admin
    importData(data) {
        if (data.products) {
            localStorage.setItem('gamezone_products', JSON.stringify(data.products));
        }
        if (data.offers) {
            localStorage.setItem('gamezone_offers', JSON.stringify(data.offers));
        }
        if (data.orders) {
            localStorage.setItem('gamezone_orders', JSON.stringify(data.orders));
        }
        this.notifyDataChange('system', 'import', data);
        return true;
    }

    // Get statistics for admin dashboard
    getStats() {
        const products = this.getProducts();
        const offers = this.getActiveOffers();
        const orders = this.getOrders();
        
        const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);
        const totalOrders = orders.length;
        const activeProducts = products.filter(p => p.status === 'active').length;
        const lowStockItems = products.filter(p => p.stock < 10).length;
        
        return {
            totalRevenue,
            totalOrders,
            activeProducts,
            lowStockItems,
            activeOffers: offers.length
        };
    }
}

// Global instance
window.gameZoneData = new GameZoneDataManager();

// Auto-refresh system for real-time updates
class GameZoneDataRefresher {
    constructor() {
        this.refreshInterval = 30000; // 30 seconds
        this.setupAutoRefresh();
        this.setupDataChangeListener();
    }

    setupAutoRefresh() {
        setInterval(() => {
            this.refreshData();
        }, this.refreshInterval);
    }

    setupDataChangeListener() {
        window.addEventListener('gamezoneDataChange', (event) => {
            const { type, action, data } = event.detail;
            this.handleDataChange(type, action, data);
        });
    }

    handleDataChange(type, action, data) {
        // Update UI components based on data changes
        switch(type) {
            case 'product':
                this.updateProductUI(action, data);
                break;
            case 'offer':
                this.updateOfferUI(action, data);
                break;
            case 'order':
                this.updateOrderUI(action, data);
                break;
        }
    }

    updateProductUI(action, product) {
        // Update product displays across the site
        const productElements = document.querySelectorAll(`[data-product-id="${product.id}"]`);
        productElements.forEach(element => {
            if (action === 'update') {
                this.updateProductElement(element, product);
            } else if (action === 'delete') {
                element.remove();
            }
        });
    }

    updateProductElement(element, product) {
        // Update price
        const priceElements = element.querySelectorAll('.product-price');
        priceElements.forEach(priceEl => {
            const priceInfo = window.gameZoneData.calculateFinalPrice(product);
            priceEl.textContent = `₹${priceInfo.finalPrice.toLocaleString('en-IN')}`;
        });

        // Update stock
        const stockElements = element.querySelectorAll('.product-stock');
        stockElements.forEach(stockEl => {
            stockEl.textContent = `${product.stock} in stock`;
        });

        // Update status
        const statusElements = element.querySelectorAll('.product-status');
        statusElements.forEach(statusEl => {
            statusEl.textContent = product.status;
            statusEl.className = `product-status ${product.status}`;
        });
    }

    updateOfferUI(action, offer) {
        // Update offer displays
        if (action === 'add' || action === 'update') {
            this.refreshOffers();
        } else if (action === 'delete') {
            this.refreshOffers();
        }
    }

    updateOrderUI(action, order) {
        // Update order displays
        this.refreshOrders();
    }

    refreshData() {
        // Refresh all data-dependent UI elements
        this.refreshProducts();
        this.refreshOffers();
        this.refreshOrders();
        this.refreshStats();
    }

    refreshProducts() {
        // Refresh product listings
        const productContainers = document.querySelectorAll('[data-products-container]');
        productContainers.forEach(container => {
            // Re-render products with latest data
            if (window.renderProducts) {
                window.renderProducts(container);
            }
        });
    }

    refreshOffers() {
        // Refresh offer displays
        const offerContainers = document.querySelectorAll('[data-offers-container]');
        offerContainers.forEach(container => {
            // Re-render offers with latest data
            if (window.renderOffers) {
                window.renderOffers(container);
            }
        });
    }

    refreshOrders() {
        // Refresh order displays
        const orderContainers = document.querySelectorAll('[data-orders-container]');
        orderContainers.forEach(container => {
            // Re-render orders with latest data
            if (window.renderOrders) {
                window.renderOrders(container);
            }
        });
    }

    refreshStats() {
        // Refresh statistics
        const statsElements = document.querySelectorAll('[data-stats]');
        statsElements.forEach(element => {
            const stats = window.gameZoneData.getStats();
            // Update stats display
            if (element.dataset.stats === 'revenue') {
                element.textContent = `₹${stats.totalRevenue.toLocaleString('en-IN')}`;
            } else if (element.dataset.stats === 'orders') {
                element.textContent = stats.totalOrders;
            } else if (element.dataset.stats === 'products') {
                element.textContent = stats.activeProducts;
            }
        });
    }
}

// Initialize data refresher
window.gameZoneRefresher = new GameZoneDataRefresher();
