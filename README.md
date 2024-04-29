### Mobile Store API Documentation ()

---

## Introduction

This documentation outlines the RESTful API for the Mobile Store, an online platform for managing mobile phone inventory. This API handles user management, including registration and login, and product management operations such as adding, updating, deleting, and retrieving mobile phone details.

## Getting Started

### Prerequisites

- Programming Language: Node.js
- Web Framework: Express.js
- Database: PostgreSQL
- ORM: Sequelize
- npm or yarn installed
- Authentication: JWT (JSON Web Tokens)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://yourrepository.com/online-store-api.git
   cd online-store-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the PostgreSQL database:**

   Ensure PostgreSQL is running and create a database named `mobile_store`.

4. **Configure environment variables:**

   Rename `.env.example` to `.env` and update the values to match your database and environment setup.

   ```plaintext
   DB_USERNAME=postgres
   DB_PASSWORD=your_password
   DB_DATABASE=mobile_store
   DB_HOST=localhost
   DB_PORT=5432
   SECRET_KEY=your_secret_jwt_key
   ```

5. **Run database migrations:**

   ```bash
   npx sequelize-cli db:migrate
   ```

6. **Start the server:**

   ```bash
   npm start
   ```

   This will start the application on `http://localhost:3000`.

## API Reference

### Authentication

Authentication is handled using JSON Web Tokens (JWT). Register and login endpoints are provided to authenticate users and provide a token that must be included in the headers of authenticated requests.

#### Register a User

- **POST** `/api/users/register`

  **Body**:

  ```json
  {
    "username": "exampleuser",
    "password": "examplepassword"
  }
  ```

  **Response**:

  ```json
  {
    "message": "User registered successfully",
    "userId": 1
  }
  ```

#### Login a User

- **POST** `/api/users/login`

  **Body**:

  ```json
  {
    "username": "exampleuser",
    "password": "examplepassword"
  }
  ```

  **Response**:

  ```json
  {
    "message": "Login successful",
    "token": "jwt_token_here"
  }
  ```

### Products

#### Get All Products

- **GET** `/api/products`
- **Headers**: `Authorization: Bearer <token>`

  **Response**:

  ```json
  [
    {
      "id": 1,
      "name": "Phone Model X",
      "description": "Latest model of Phone X",
      "price": 999.99,
      "stock": 10,
      "imageUrl": "http://example.com/x.jpg"
    }
  ]
  ```

#### Create a Product

- **POST** `/api/products`
- **Headers**: `Authorization: Bearer <token>`

  **Body**:

  ```json
  {
    "name": "Phone Model Z",
    "description": "Innovative design with state-of-the-art features.",
    "price": 1099.99,
    "stock": 25,
    "imageUrl": "http://example.com/z.jpg"
  }
  ```

  **Response**:

  ```json
  {
    "id": 3,
    "name": "Phone Model Z",
    "description": "Innovative design with state-of-the-art features.",
    "price": 1099.99,
    "stock": 25,
    "imageUrl": "http://example.com/z.jpg"
  }
  ```

#### Update a Product

- **PUT** `/api/products/:id`
- **Headers**: `Authorization: Bearer <token>`

  **Body**:

  ```json
  {
    "price": 1129.99,
    "stock": 30
  }
  ```

  **Response**:

  ```json
  {
    "id": 3,
    "name": "Phone Model Z",
    "description": "Updated description here...",
    "price": 1129.99,
    "stock": 30,
    "imageUrl": "http://example.com/z.jpg"
  }
  ```

#### Delete a Product

- **DELETE** `/api/products/:id`
- **Headers**: `Authorization: Bearer <token>`

  **Response**:

  ```json
  {
    "message": "Product deleted successfully"
  }
  ```
