💼 FreelanceNation

A modern freelance task management platform built with React, Firebase, MongoDB, and Express.js, styled using Tailwind CSS and DaisyUI — designed to help users post, manage, and bid on freelance projects efficiently.

🌍 Live Demo: FreelanceNation Live Site

🚀 Project Overview

FreelanceNation streamlines the way freelancers and clients connect. From posting jobs to bidding and task tracking, it's designed with simplicity, responsiveness, and user experience in mind.

🎯 Core Features

✅ User Authentication — Secure login/signup via Firebase (Email & Google)

📝 Post & Manage Tasks — Add, edit, and delete freelance opportunities

🧠 Smart Bidding System — Users can bid once per task, tracked with MongoDB

🕐 Recent Deadlines Display — Shows top 6 tasks based on nearest deadlines

📆 Date Picker — Built-in deadline selector with react-datepicker

📋 User Dashboard — Track your tasks and bids

🎨 Modern UI — TailwindCSS & DaisyUI ensure elegant design and theme support

📲 Mobile Responsive — Fully optimized for all screen sizes

🌘 Dark Mode Ready — Seamless switch with DaisyUI themes

📢 Toast & Alerts — Enhanced UX via Toastify and SweetAlert2

📈 Animated Counters — Using react-countup for cool stats

📦 Tech Stack

Frontend:

React 19 (via Vite)

Firebase (Authentication)

Tailwind CSS 4 + DaisyUI

React Router 7

React Icons, Toastify, Swiper.js

React CountUp, React DatePicker

Backend:

Express.js

MongoDB Atlas

Dotenv + CORS

📁 Folder Structure

freelancenation/
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/AuthContext.jsx
│   │   ├── pages/
│   │   ├── firebase/config.js
│   │   └── App.jsx
├── backend/
│   ├── index.js
│   └── .env
└── README.md

🧰 NPM Packages Used

Frontend:

"react": "^19.0.0",
"react-dom": "^19.0.0",
"react-router": "^7.5.2",
"firebase": "^11.6.1",
"tailwindcss": "^4.1.7",
"daisyui": "^5.0.28",
"react-icons": "^5.5.0",
"react-toastify": "^11.0.5",
"react-countup": "^6.5.3",
"swiper": "^11.2.6",
"react-datepicker": "^8.3.0"

Backend:

"express": "^5.1.0",
"cors": "^2.8.5",
"dotenv": "^16.5.0",
"mongodb": "^6.16.0"

🔧 Installation & Setup

Backend:

cd backend
npm install

Create a .env file:

DB_USER=your_db_username
DB_PASS=your_db_password
PORT=3000

Run the server:

node index.js

Frontend:

cd frontend
npm install
npm run dev

Create a .env file:

VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx

🌐 API Endpoints

Method

Endpoint

Description

GET

/task

Get all tasks

GET

/recentTasks

Get 6 recent tasks (by deadline)

GET

/task/:email

Get tasks by user email

GET

/taskDetail/:id

Get task details

POST

/task

Create a new task

POST

/user

Register a new user

PATCH

/post/:id

Update bid list

PUT

/updateTask/:id

Update a task

DELETE

/myTask/:id

Delete a task

🔥 Screenshots

📌 Replace below with actual screenshots

🏠 Home Page

📋 Task Details

📂 Dashboard

💡 Future Improvements



👨‍💻 Author

Asibur RahmanSenior IT Officer, Shishir Knitting & Dyeing (AD Group)📧 Email: asiburrahman.dev@gmail.com🌐 LinkedIn

📜 License

Licensed under the MIT License.

⭐️ Show Your Support

If you like this project, don’t forget to ⭐️ the repo and share it with others!