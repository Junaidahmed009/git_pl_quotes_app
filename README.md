# Quote Generator Frontend

This is the **frontend** part of the Quote Generator App built with **React**, **Vite**, and **Tailwind CSS**. It connects to a backend built using **Node.js** and **Express** that serves random motivational quotes.

---

## 📦 Installation Guide

Follow the steps below to set up and run both the backend and frontend locally.

---

## 🖥️ 1. Clone the Repository

```bash
git clone 
cd nodejs-fullstack-practice
```

## 🧩 2. Install and Run Backend of quote app

📁 Navigate to the backend folder and start the server:

```bash
cd quote-app/backend
npm install
node index.js
```

- The backend will start on `http://localhost:3000`

- Make sure it's running before starting the frontend

## 🌐 3. Install and Run Frontend of quote app

📁 In a new terminal, navigate to the frontend folder:

```bash
cd quote-app/frontend
npm install
npm run dev
```

- The frontend will run on `http://localhost:5173`

- It fetches quotes from the backend API (/api/quote)

## ✅ That’s it!

Your full-stack app will now be live locally:

- Frontend: `http://localhost:5173`

- Backend: `http://localhost:3000`

--- 

Make sure both servers are running in separate terminals. Enjoy coding!

cloned one project from github

Pratcing Git

#initilize git in root folder quote app
git init

#checking remote repository origin added or not
git remote -v
git remote add

#addiding git so it can track all files 
git add .

#checking git branch if not create it and branch will only occur when you do your first commit.
git branch
git branch newbran

#commiting my first commmit 
git commit -m "initial commit"

#check status of files any untracked file so you can add and commit again use git status
git status

#git log and --oneline
to check for git commits 

#pushing code to github
git push -u origin main
