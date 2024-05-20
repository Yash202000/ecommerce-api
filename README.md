# Ecommerce API

This is a simple ecommerce API for managing product inventory using Node.js and MongoDB.

## Features

- Add a product
- List all products
- Delete a product by ID
- Update product quantity by ID

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ecommerce-api.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ecommerce-api
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the MongoDB server:
    ```bash
    mongod
    ```

5. Start the application:
    ```bash
    npm start
    ```

6. Use Postman or any other API testing tool to interact with the API:
    - Add a product (POST request to `/products/create`):
        ```json
        {
            "name": "laptop",
            "quantity": 10
        }
        ```
    - List all products (GET request to `/products`)
    - Delete a product by ID (DELETE request to `/products/:id`)
    - Update product quantity by ID (POST request to `/products/:id/update_quantity?number=10`)
