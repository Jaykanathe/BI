# BI Machine Task
## Description
My Email Verification Project is a simple API that allows users to register and verify their email addresses.
## Getting Started
### Prerequisites

Node.js (version 14 or higher)
MongoDB (version 4 or higher)

### Installation
Clone the repository: git clone https://github.com/Jaykanathe/BI.git
Install dependencies: npm install
Start the server: npm start

### Usage

Register a new user: POST http://localhost:4000/api/uses/register with formdata { "name": "testUser", "email": "testuses@example.com", "password": "test@123","image":"testImg" }
Verify an email address: GET /verify?token=<verification_token>

### Features
User registration with email verification
Secure password storage using bcrypt
MongoDB database integration

### Configuration
Set the MONGODB_URI environment variable to connect to your MongoDB instance.
