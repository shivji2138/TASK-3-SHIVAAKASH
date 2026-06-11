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
