#  GameZone - Gaming Accessories E-Commerce

<div align="center">
  
A comprehensive e-commerce platform for gaming accessories with dual-role system (Admin & User), featuring modern UI/UX, complete shopping cart functionality, and robust user management.

[Live Demo](#) | [Features](#features) | [Screenshots](#screenshots)

</div>

---

##  Features

###  **Dual Role System**
- **Admin Panel** - Complete store management dashboard
- **User Dashboard** - Personalized shopping experience
- **Role-based Access Control** - Secure authentication system
- **Session Management** - Persistent login states

###  **Admin Features**
- **Dashboard Analytics** - Sales overview, user statistics, revenue tracking
- **Order Management** - View, edit, and manage all customer orders
- **Product Management** - Add, edit, delete products with inventory tracking
- **User Management** - View customer profiles and order history
- **Store Settings** - Configure store information and preferences
- **Real-time Statistics** - Live data updates and metrics

###  **User Features**
- **Personal Dashboard** - Welcome screen with quick stats and actions
- **Profile Management** - Edit personal information and addresses
- **Order History** - Track all past and current orders
- **Shopping Cart** - Add/remove items, quantity management
- **Wishlist** - Save favorite products for later
- **Address Book** - Multiple shipping addresses

###  **E-Commerce Functionality**
- **Product Catalog** - Browse products by category
- **Product Details** - Detailed product pages with image galleries
- **Shopping Cart** - Persistent cart across sessions
- **Checkout Process** - Multi-step checkout with address selection
- **Order Tracking** - Real-time order status updates

###  **Modern UI/UX Design**
- Dark theme optimized for gaming aesthetics
- Cyan and purple accent colors with gradient effects
- Smooth animations and transitions throughout
- Fully responsive layout for all devices
- Interactive components with hover effects

---

##  System Architecture

###  **Role-Based Access**
```
┌─────────────────┐    ┌─────────────────┐
│   Admin Panel   │    │  User Dashboard │
│                 │    │                 │
│ • Store Stats   │    │ • Welcome Page  │
│ • Order Mgmt    │    │ • Quick Actions │
│ • Product Mgmt  │    │ • Order History │
│ • User Mgmt     │    │ • Profile Mgmt  │
│ • Analytics     │    │ • Wishlist      │
└─────────────────┘    └─────────────────┘
         │                       │
         └───────────┬───────────┘
                     │
         ┌─────────────────┐
         │   Main Store    │
         │                 │
         │ • Product Browse│
         │ • Shopping Cart │
         │ • Product Details│
         │ • Checkout      │
         └─────────────────┘
```

###  **Authentication Flow**
```
Login → Role Detection → Redirect to Dashboard
├─ Admin → admin.html
├─ User  → user-dashboard.html
└─ Invalid → Error Message
```

---

##  Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishalraj60/e-commerce.git
   ```

2. **Navigate to the project**
   ```bash
   cd e-commerce
   ```

3. **Open in browser**
   ```bash
   open index.html
   # or simply double-click index.html
   ```

###  Login Credentials

####  Admin Access
- **URL**: `admin/admin-login.html`
- **Username**: `admin`
- **Password**: `admin123`

####  User Access
- **URL**: `user/login.html`
- **Name**: Any name (minimum 2 characters)
- **Phone**: Any phone number (minimum 10 digits)

---

##  Project Structure

```
e-commerce/
├── index.html              # Main store page
├── cart.html               # Shopping cart
├── product.html            # Product details page
├── landingpage.html        # Landing page
├── style.css               # Global styles
├── script.js               # JavaScript functionality
├── admin/                  # Admin panel files
│   ├── admin.html          # Admin dashboard
│   └── admin-login.html    # Admin login page
├── user/                   # User panel files
│   ├── user-dashboard.html # User dashboard
│   ├── login.html          # User login page
│   ├── signup.html         # User registration
│   └── profile.html       # User profile page
├── images/                 # Image assets
└── README.md              # Documentation
```

---

##  Key Features Explained

###  **Admin Panel (`admin/admin.html`)**
- **Dashboard Tab**: Overview with statistics and recent orders
- **Orders Tab**: Complete order management with status updates
- **Products Tab**: Product catalog management
- **Users Tab**: Customer management and analytics
- **Analytics Tab**: Sales reports and insights
- **Settings Tab**: Store configuration

###  **User Dashboard (`user/user-dashboard.html`)**
- **Welcome Section**: Personalized greeting with quick stats
- **Quick Actions**: Easy access to shopping, cart, profile
- **Featured Products**: Curated product recommendations
- **Hot Deals**: Special offers and discounts
- **Recent Activity**: User's shopping history

###  **Shopping Cart System**
- **Persistent Storage**: Cart saved in localStorage
- **Quantity Management**: Increment/decrement item quantities
- **Price Calculation**: Automatic subtotal and total calculation
- **Item Management**: Add/remove items with visual feedback

---

##  Data Storage

###  **localStorage Keys**
```javascript
// User Session
'isLoggedIn'           // Boolean - User login status
'gamezone_user'        // Object - User profile data
'isAdmin'             // Boolean - Admin access status
'adminUser'           // String - Admin username

// Shopping Cart
'gamezone_cart'       // Array - Cart items with quantities
```

###  **User Data Structure**
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+91 98765 43210",
  memberSince: "2024",
  totalOrders: 5,
  totalSpent: 45678
}
```

---

##  Technologies Used

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with animations
- **JavaScript** - Dynamic functionality and state management
- **localStorage** - Client-side data persistence

---

##  Security Features

- **Role-Based Authentication** - Separate login systems for admin and users
- **Session Management** - Secure login state persistence
- **Access Control** - Admin-only pages protected by authentication
- **Input Validation** - Form validation on both client and server-side
- **Secure Logout** - Complete session cleanup on logout

---

##  Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

##  License

This project is free to use for personal and educational purposes.

---

##  Author

**Vishal Raj**

- GitHub: [@vishalraj60](https://github.com/vishalraj60)

---

##  Acknowledgments

- Product images from [Pexels](https://www.pexels.com/)
- Font from [Google Fonts](https://fonts.google.com/)
- Design inspired by modern gaming aesthetics

---

<div align="center">

###  Star this repository if you found it helpful!

Made  by Vishal Raj

</div>
