## User Management System (CRUD App)

A full-stack User Management System built using React, Node.js, Express.js, MongoDB, and Axios. This application allows users to perform Create, Read, Update, and Delete (CRUD) operations through a simple and responsive web interface.

## Features

* Create new users
* View all users
* Update existing user details
* Delete users
* RESTful API integration
* MongoDB database connectivity
* Responsive and clean UI

## Tech Stack

### Frontend

* React.js (Vite)
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## Project Structure

```text
project/
│
├── frontend/
│   ├── src/
│   ├── App.jsx
│   └── App.css
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
```

## API Endpoints

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| POST   | /api/users     | Create User    |
| GET    | /api/users     | Get All Users  |
| GET    | /api/users/:id | Get User By ID |
| PUT    | /api/users/:id | Update User    |
| DELETE | /api/users/:id | Delete User    |

## Installation

### Clone Repository

```bash
git clone https://github.com/shivji2138/TASK-3-SHIVAAKASH
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

### MongoDB

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Learning Outcomes

* Full Stack Development
* REST API Development
* MongoDB Integration
* CRUD Operations
* Client-Server Communication
* State Management in React

---

## Screenshots

<img width="1912" height="1092" alt="Screenshot 2026-06-11 164120" src="https://github.com/user-attachments/assets/b3a1369f-b1b7-4cdf-9acf-6f1e6003ec11" />
<img width="1916" height="1142" alt="Screenshot 2026-06-11 164145" src="https://github.com/user-attachments/assets/f7b0b3ca-8f98-4cba-bad7-71d751637843" />
<img width="1919" height="1158" alt="Screenshot 2026-06-11 164225" src="https://github.com/user-attachments/assets/661221aa-3fc5-44aa-b057-bb540cd71eea" />
<img width="1359" height="572" alt="Screenshot 2026-06-11 164303" src="https://github.com/user-attachments/assets/7dfe5a26-0779-4be9-bb19-c9c39c12d451" />




