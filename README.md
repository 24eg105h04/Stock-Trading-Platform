# 📈 Stock Trading Platform (MERN Stack)

## Overview

The Stock Trading Platform is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The platform provides users with a secure and interactive environment to simulate stock trading activities. Users can register, log in, buy and sell stocks, monitor their investment portfolios, and track transaction history in real time.

This project demonstrates the implementation of a modern web application with authentication, REST APIs, database integration, and responsive user interfaces.

---

## Features

### 🔐 User Authentication

* User Registration
* Secure Login System
* Password Encryption using bcrypt.js
* JWT-based Authentication
* User Session Management

### 📊 Stock Trading

* Buy Stocks
* Sell Stocks
* Input Validation for Trades
* User-specific Data Handling

### 💼 Portfolio Management

* View Owned Stocks
* Track Quantity and Average Purchase Price
* Dashboard Summary
* Total Investment Calculation

### 📝 Transaction History

* Maintain Complete Trading History
* Record Buy and Sell Transactions
* Store Transaction Date and Time
* Retrieve User-specific Transactions

### 🗄 Database Management

* MongoDB Database Integration
* Mongoose Models
* CRUD Operations
* Efficient Data Storage

### 🎨 Frontend

* React.js + Vite
* Responsive User Interface
* Dashboard Layout
* Professional Card-Based Design
* State Management using React Hooks
* API Communication with Axios

### ⚙ Backend

* Express.js REST APIs
* MongoDB Connection
* JWT Authentication Middleware
* Controllers and Routes Structure
* Error Handling

---

## Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt.js
* dotenv
* cors

---

## Project Structure

```
StockTradingPlatform
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── api.js
│   │   └── App.jsx
│   ├── public
│   └── package.json
│
└── README.md
```

---

## Functional Modules

### User Module

* Register new account
* Login to existing account
* Secure authentication

### Trading Module

* Buy stocks
* Sell stocks
* Update portfolio automatically

### Portfolio Module

* View current holdings
* Calculate investment values
* Display stock information

### Transaction Module

* Save transaction records
* Display transaction history
* Maintain timestamps

---

## REST API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### Transactions

* POST `/api/transactions/buy`
* POST `/api/transactions/sell`
* GET `/api/transactions/:userId`

### Portfolio

* GET `/api/portfolio/:userId`

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Future Enhancements

* Real-Time Stock Price APIs
* Market Dashboard
* Stock Search and Filters
* Charts and Data Visualization
* Admin Panel
* User Profile Management
* Watchlist Feature
* Notifications
* Deployment on Render and Vercel

---

## Learning Outcomes

Through this project, the following concepts were implemented:

* MERN Stack Development
* REST API Design
* MongoDB Database Operations
* Authentication using JWT
* Password Hashing with bcrypt.js
* React Components and Hooks
* State Management
* CRUD Operations
* Full Stack Application Development

---

## Author

Developed as a Full Stack MERN Project for academic and learning purposes.

---

## License

This project is open source and available for educational purposes.

