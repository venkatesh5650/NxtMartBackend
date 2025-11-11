# 🛍️ NxMart - Full Stack Ecommerce Application

**🔗 Live Frontend:** https://frontend-nxt-mart-ctio.vercel.app  
**🔗 Live Backend API:** https://nxtmartfb.onrender.com

NxMart is a full-stack ecommerce web application where users can browse products, add them to cart, and checkout securely with authentication and protected routes.

---

## 📌 Features

| Feature | Description |
|--------|-------------|
| 🔐 User Authentication | SignUp / Login using JWT |
| 🛒 Cart System | Add, remove and manage products in cart |
| 🛍️ Product Catalog | Browse items with images and pricing |
| ✅ Protected Checkout | Only logged-in users can place orders |
| 💾 SQLite Database | Fast and lightweight storage |
| 🎨 Responsive UI | Styled with modern responsive design |

---

## 🏗️ Project Structure

```

NxtMartFB/
│── Ecommerce_App/
│ ├── Backend/ # Node.js + Express + SQLite API
│ │ ├── server.js
│ │ ├── routers/
│ │ ├── middleware/
│ │ ├── Database/
│ │ └── package.json
│ │
│ └── Frontend/ # React Application
│ └── myapp/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Home/
│ │ │ ├── Login/
│ │ │ ├── Signup/
│ │ │ ├── Cart/
│ │ │ └── Checkout/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│
└── README.md

```

---

## 🔗 API Endpoints

### **Auth**
| Method | Endpoint | Description |
|-------|----------|-------------|
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Login & receive JWT token |

### **Products**
| Method | Endpoint | Description |
|-------|----------|-------------|
| `GET` | `/products` | Fetch all products |

### **Cart / Orders** (Authenticated)
| Method | Endpoint | Description |
|-------|----------|-------------|
| `POST` | `/order` | Place order |

> **Authorization:**  
All protected routes require:  


---

## 🛠️ Setup Instructions (Local Development)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/venkatesh5650/NxtMartFB.git
cd NxtMartFB/Ecommerce_App
```

---

```
### Backend Setup
```
cd Backend

npm install

npm start

Runs On:

http://localhost:4000

### Frontend Setup

cd ../Frontend/myapp

npm install

npm start

Runs On:

http://localhost:3000
```
```
### Deployment Notes

| Service  | URL                    |
| -------- | ---------------------- |
| Frontend | ✅ Hosted on **Vercel** |
| Backend  | ✅ Hosted on **Render** |
| Database | ✅ SQLite (file-based)  |

```

```
###ScreenShots

![Home Page](./screenshots/home.png)
![Product List](./screenshots/products.png)
![Cart Page](./screenshots/cart.png)
![Signup Form](./Ecommerce_App/Frontend/myapp/public/screenshots/signup.png)

```
