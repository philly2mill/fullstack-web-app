# 🌐 Web Application Frontend

## 📌 Project Overview

This is the frontend of the Web Application project. It is built using **React.js** and provides a clean and responsive user interface that allows users to interact with the backend API.

### 🎯 Purpose

* Display data from the backend
* Allow users to create, update, and view information
* Provide a smooth user experience

---

## 📚 Table of Contents

* Installation & Setup
* Usage Instructions
* API Integration
* Project Structure
* Contributing
* License

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js installed
* npm or yarn

### Steps to Run Locally

```bash
git clone https://github.com/philly2mill/fullstack-web-app.git
cd fullstack-web-app/frontend
npm install
npm start

### App runs at:

http://localhost:3000

---

## 🚀 Usage Instructions

* Open the app in your browser
* Navigate through pages
* Perform actions like:

  * View users/data
  * Add new entries
  * Update or delete data

### Screenshot Example

<img src="images/screenshot.png" width="500">

---

## 🔗 API Integration

The frontend communicates with the backend API using HTTP requests.

### Base URL

http://localhost:5000/api

### Example Request

```javascript
fetch("http://localhost:5000/api/users")
  .then(res => res.json())
  .then(data => console.log(data));
```

### Endpoints Used

* GET /users
* POST /users
* PUT /users/:id
* DELETE /users/:id

---

## 📁 Project Structure

```
frontend/
│── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│── public/
│── package.json
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make changes
4. Commit changes
5. Push and open a Pull Request

---

## 📄 License


---

# 🔹 BACKEND FILES

### 1️⃣ `backend/package.json`
```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "mongoose": "^7.4.0"
  }
}