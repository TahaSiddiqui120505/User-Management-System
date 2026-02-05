User Management System

This is a Full Stack MERN application built as part of a MERN Stack Developer Practical Task.
The project allows managing users with full CRUD operations, search, pagination, and CSV export.

The application is built using:

MongoDB for database

Express & Node.js for backend API

React (Vite) for frontend

CSS for styling

🚀 Live Demo

Frontend (Vercel):
👉 https://user-management-system-taupe.vercel.app/users

Backend (Render):
👉 https://user-management-system-7b2m.onrender.com/api

📂 Project Structure
mern-user-management/
├── backend/
│   ├── server.js
│   ├── app.js
│   ├── src/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   └── middlewares/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   ├── utils/
│   │   └── routes/
│   └── package.json
│
└── README.md

✨ Features
User Management

Create a new user

View user details

Edit existing user

Delete user

Additional Features

Search users

Pagination

Export user list to CSV

Responsive UI (mobile & desktop)

Proper error handling

Clean and modular code structure

🧑‍💻 Tech Stack
Frontend

React (Vite)

CSS

Axios

React Router DOM

Backend

Node.js

Express.js

MongoDB (Mongoose)

RESTful APIs

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

🔧 Environment Variables
Backend (backend/.env)
MONGO_URI=your_mongodb_connection_string
PORT=5000

Frontend (frontend/.env)
VITE_API_BASE_URL=https://your-backend-name.onrender.com/api

🛠️ How to Run Locally
Backend
cd backend
npm install
npm run dev


Server runs on:

http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


App runs on:

http://localhost:5173

📦 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get users (pagination, search)
GET	/api/users/:id	Get user by ID
POST	/api/users	Create new user
PUT	/api/users/:id	Update user
DELETE	/api/users/:id	Delete user
GET	/api/users/export/csv	Export users to CSV
🎯 Notes

UI is implemented using plain CSS to closely match the provided design.

Backend validations ensure data integrity.

Frontend validations improve user experience.

Code is structured to reflect real-world project practices.

📌 Submission

This project is submitted as part of the Full Stack Intern / MERN Developer Practical Task.

👤 Author

Taha Siddiqui
MERN Stack Developer