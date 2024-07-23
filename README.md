### Data-Association-MongoDB

## Overview

Data-Association-MongoDB is a Node.js project that demonstrates data association using MongoDB. The project includes a simple Express server with routes to create users and posts, and establish relationships between them.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/A-Tetarwal/Data-Association-MongoDB.git
    cd Data-Association-MongoDB
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the server:**
    ```sh
    node app.js
    ```

## Project Structure

```
Data-Association-MongoDB
│
├── models
│   ├── user.js           # User model definition
│   └── post.js           # Post model definition
├── app.js                # Main application file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## Usage

### Home Route

- **Route:** `/`
- **Method:** `GET`
- **Description:** Returns a welcome message.
- **Response:** 
    ```json
    {
        "message": "aaj magic hoga"
    }
    ```

### Create User

- **Route:** `/create`
- **Method:** `GET`
- **Description:** Creates a new user with predefined details.
- **Response:** 
    ```json
    {
        "username": "jaani",
        "age": 25,
        "email": "jaaniafsana@gmail.com",
        "posts": []
    }
    ```

### Create Post

- **Route:** `/post/create`
- **Method:** `GET`
- **Description:** Creates a new post associated with a predefined user.
- **Response:**
    ```json
    {
        "user": {
            "_id": "user_id",
            "username": "jaani",
            "age": 25,
            "email": "jaaniafsana@gmail.com",
            "posts": ["post_id"]
        },
        "post": {
            "_id": "post_id",
            "postdata": "how's everything going?",
            "user": "user_id"
        }
    }
    ```

## Models

### User Model

- **Fields:**
    - `username`: String
    - `age`: Number
    - `email`: String
    - `posts`: Array of ObjectIds (references to posts)

### Post Model

- **Fields:**
    - `postdata`: String
    - `user`: ObjectId (reference to a user)

## Notes

- The project demonstrates basic data association in MongoDB using Mongoose.
- The user and post creation routes use hardcoded values for simplicity.

## Purpose: Can be used for learning

Feel free to modify this README according to your project's specific details and requirements.