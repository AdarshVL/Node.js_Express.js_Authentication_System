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
## Node.js_Express.js_Authentication_System/
- **server.js**  Main application file
- **package.json** Project metadata & dependencies
- **.gitignore** Ignored files (node_modules, .env)
- **README.md** Project documentation

---
## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Node.js_Express.js_Authentication_System.git
   cd Node.js_Express.js_Authentication_System
