# Ilham's Blog CMS

A fullstack Blog CMS built with **MERN stack** (MongoDB, Express, React, Node.js).  
It allows admin to manage blog content through a secure dashboard, while visitors can read and share articles on a clean, responsive frontend.

## Tech Stack

- **Frontend**: React.js, React Router, Tailwind CSS 
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Auth**: JWT (admin only)
- **Deployment**: Vercel (Frontend) & Railway / Render (Backend)

## 🔐 Admin Features
- Login with JWT
- Create, Edit, Delete Post
- Upload Image (Cloudinary - optional)
- See Post List

## 🌐 Public Features
- View Posts
- Read Post Detail
- (Optional) Comment & Share

## 📂 Project Structure

```bash
project-root/
│
├── client/      # React frontend
│   ├── src/
│   ├── public/
│   └── ...
│
└── server/      # Express backend
    ├── routes/
    ├── controllers/
    ├── models/
    ├── middleware/
    └── ...
