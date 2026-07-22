Preview ::::: https://snk-shoe-pzsr86gh6-sohamthapaliya-1697s-projects.vercel.app/








# 👟 stylish - MERN Shoe Ecommerce Platform

![Project Banner](https://via.placeholder.com/1200x400)

## 📌 Overview

**SpectaStyle** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) ecommerce platform designed for selling shoes online. The application provides a modern shopping experience with product browsing, user authentication, cart management, profile management, order checkout, and payment integration.

The project focuses on building a scalable ecommerce system with a responsive frontend, secure backend APIs, and database-driven product management.

---

# 🚀 Features

## 👤 User Features

- User registration and login authentication
- JWT-based user authentication
- Secure password handling
- User profile management
- Profile picture upload
- Password reset functionality
- Logout functionality

---

## 👟 Product Features

- Browse available shoes
- View product details
- Product categories
- Product search and filtering
- Product images
- Dynamic product fetching from MongoDB
- Admin product management

---

## 🛒 Shopping Features

- Add products to cart
- Update cart quantity
- Remove products from cart
- View cart summary
- Checkout process
- Order calculation

---

## 💳 Payment Integration

- Integrated Stripe payment gateway
- Secure checkout session creation
- Online payment processing

---

## 📊 Additional Features

- Website visitor counter
- Responsive UI design
- Modern animations
- Toast notifications
- Loading states
- Error handling

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- CSS3
- Material UI Icons
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Stripe API
- CORS
- dotenv

## Database

- MongoDB Atlas

## Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- MongoDB Atlas

---

# 📂 Project Structure

```
SpectaStyle/

│
├── frontend/
│
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── Assets/
│   │   ├── CSS/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
│
├── backend/
│
│   ├── Routes/
│   ├── Controllers/
│   ├── Models/
│   ├── Middleware/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/yourusername/spectastyle.git

cd spectastyle
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
VITE_API_URL=http://localhost:5001
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=5001

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5001
```

---

# 🔐 Authentication Flow

1. User registers account
2. Backend validates user details
3. Password is securely stored
4. JWT token is generated
5. Token is stored on frontend
6. Authenticated users can access protected features

---

# 🔄 Application Flow

```
User
 |
 |
React Frontend
 |
 |
Axios API Requests
 |
 |
Express Backend
 |
 |
MongoDB Database
 |
 |
Response
 |
 |
React UI Update
```

---

# 📡 API Endpoints

## Authentication

### Register User

```
POST /ecommerce/user/signup
```

### Login User

```
POST /ecommerce/user/login
```

### Update Profile Image

```
POST /ecommerce/user/updateProfileImage
```

### Reset Password

```
POST /ecommerce/user/resetPassword
```

---

## Products

Get all products:

```
GET /ecommerce/product
```

Get single product:

```
GET /ecommerce/product/products/:id
```

Add product:

```
POST /ecommerce/product
```

Update product:

```
PUT /ecommerce/product/products/:id
```

Delete product:

```
DELETE /ecommerce/product/products/:id
```

---

## Payment

Create checkout session:

```
POST /checkout
```

---

# 🌱 Environment Variables

Backend requires:

| Variable | Description |
|-|-|
| PORT | Server port |
| MONGO_URI | MongoDB connection |
| JWT_SECRET | Authentication secret |
| STRIPE_SECRET_KEY | Payment API key |

Frontend:

| Variable | Description |
|-|-|
| VITE_API_URL | Backend API URL |

---

# 📸 Screenshots

(Add your project screenshots here)

- Home Page
- Product Page
- Cart Page
- Login/Register
- User Profile
- Checkout

---

# 🎯 Future Improvements

- Wishlist functionality
- Product reviews and ratings
- Order tracking
- Admin dashboard improvements
- Cloud image storage using Cloudinary
- Email notifications
- Recommendation system using AI

---

# 👨‍💻 Developer

**Soham Thapaliya**

Full Stack MERN Developer

Skills:
- React
- Node.js
- Express
- MongoDB
- JavaScript
- REST APIs

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
