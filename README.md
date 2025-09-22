# 🔐 Node.js + Express.js Authentication System

A simple authentication system built with **Node.js** and **Express.js**, implementing **bcrypt password hashing** and **JWT-based login**.  
It also demonstrates how to secure routes with **Express middleware**.

---

## 📌 Features
- ✅ User Registration with **hashed passwords** using bcrypt  
- ✅ User Login with **password verification**  
- ✅ JWT token generation on successful login  
- ✅ Protected route (`/profile`) accessible only with a valid JWT  
- ✅ In-memory storage (no database, for demo purposes)  
- ✅ Clean and beginner-friendly code  

---

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js  
- **Security:** bcrypt, JSON Web Token (JWT)  
- **Utilities:** body-parser, nodemon  

---
## 📂 Node.js_Express.js_Authentication_System/
- **server.js** - Main server file (contains /register, /login, /profile)
- **package.json** - Project metadata & dependencies
- **.gitignore** - Ignored files (node_modules, .env)
- **README.md** - Project documentation

---

## 🔍 Test the APIs (examples using curl)

## Register
```
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{"username":"alice","password":"mypassword"}'
```
## Login
```
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","password":"mypassword"}'
  ```
The response will include a token: { message: "Login Successful", token: "..." }

## Access protected /profile
```
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{"username":"alice","password":"mypassword"}'
```

## ⚙️ Installation & Setup (GitHub Clone)

1. Clone the repository:
```
git clone https://github.com/YOUR_USERNAME/Node.js_Express.js_Authentication_System.git
cd Node.js_Express.js_Authentication_System
```

## ▶️ Setup & Run (local)
1. Clone or create a folder and copy files.
2. Open terminal in project folder.
3. Run:
```
npm install
# optionally set secret and port
export JWT_SECRET="your_secret_here"
export PORT=3000
npm start
```
