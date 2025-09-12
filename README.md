# KaushalSaathi Project
KaushalSaathi is a full-stack project with **Next.js frontend**, **Node.js/Express backend**, and **MongoDB database**.  
This guide explains how to set up and run the project locally using three terminals.

## ⚙️ Prerequisites
Make sure you have these installed:
- [Node.js](https://nodejs.org/) (>= 18.x recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas cloud)
- Git


## 📥 Clone Repository
```bash
git clone https://github.com/Vidyapb841/KaushalSaathi.git
cd KaushalSaathi

Environment Setup

Create .env files in both backend and frontend folders.

Backend (/backend/.env)
PORT=5000
MONGO_URI=mongodb://localhost:27017/kaushalsaathi
JWT_SECRET=your_secret_key

Frontend (/frontend/.env.local)
NEXT_PUBLIC_API_URL=http://localhost:5000

Start MongoDB

If running locally:

mongod or (
(base) PS C:\Koushalsaathi(sunsys)> & "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath "C:\data\db")


(Keep this terminal open)


Start Backend
cd backend
npm install
npm run dev


Backend will run on: http://localhost:5000

Start Frontend
cd frontend
npm install
npm run dev


Frontend will run on: http://localhost:3000

Team Workflow (Git)

Always create a new branch before coding:

git checkout -b feature-branch-name


After changes:

git add .
git commit -m "Your message"
git push origin feature-branch-name
