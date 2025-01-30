# Quick Commerce

# Quick Commerce Backend

A simple **Quick Commerce** backend built using **Node.js, Express, and MongoDB**, following the **Model-View-Controller (MVC)** architecture. This backend provides user authentication, product management, and cart management functionalities.

## Features

- **User Authentication** (JWT-based)
  - User registration and login
- **Product Management** (Admin-only features)
  - Create, update, delete products
  - Retrieve products with search, filtering, and pagination
- **Cart Management**
  - Add, update, and remove items from the cart
  - View the user's cart
- **Security & Authorization**
  - JWT authentication for secure API access
  - Role-based access control for admin features

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Token)
- **Middleware**: Express, Body-Parser

## Project Structure

```
quick-commerce-backend/
│── models/          # Database schemas
│── config/          #  Database Connectivity
│── routes/          # API endpoints
│── middlewares/     # Authentication and authorization
│── app.js           # Main server file
│── package.json     # Dependencies and scripts
│── README.md        # Project documentation
|__ node_modules     #packages used
```

## Installation & Setup

### Prerequisites
- **Node.js** (>=14.x recommended)
- **MongoDB** installed and running locally or on a cloud service

### Steps to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quick-commerce-backend.git
   cd quick-commerce-backend
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   - Create a `.env` file and add the following:
     ```
     JWT_SECRET=your_jwt_secret_key
     MONGODB_URI=mongodb://localhost:27017/quick_commerce
     PORT=9000
     ```
4. **Run the server**
   ```bash
   npm start
   ```
   The server will be running at `http://localhost:9000`.

## API Endpoints

### Authentication Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/users/register` | Register a new user |
| POST | `/users/login` | Login and get a JWT token |

### Product Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/products` | Create a new product (Admin only) |
| GET | `/products` | Get all products with search & filters |
| GET | `/products/{id} ` |Get the products by id|
| PUT | `/products/{id}` | Update a product (Admin only) |
| DELETE | `/products/{id}` | Delete a product (Admin only) |

### Cart Routes
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/cart` | Add a product to cart |
| GET | `/cart` | Get user's cart |
| PUT | `/cart/:id` | Update cart item quantity |
| DELETE | `/cart/:id` | Remove an item from cart |

## ER Diagram
Below is the **Entity-Relationship (ER) Diagram** representing the database schema:

```plaintext
+-----------+      +-------------+      +--------+
|   Users   |      |  Products   |      |  Cart  |
+-----------+      +-------------+      +--------+
| _id       |<---->| _id         |<---->| _id    |
| name      |      | name        |      | user_id|
| email     |      | description |      | product_id |
| password  |      | price       |      | quantity   |
| isAdmin   |      | stock       |      |            |
+-----------+      +-------------+      +--------+
```

## Author
Developed by **Pothula Naga Jyothi**

