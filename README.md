![image](https://github.com/user-attachments/assets/44b5a097-2462-4d53-b748-fa5378737647)
 🔗 URL Shortener Application

A full-stack URL shortener web application that allows users to generate shortened URLs and automatically redirect to the original long URLs. Built with Angular 20, Node.js, Express.js,  Tailwind css and MongoDB Atlas. Deployed with Vercel (frontend) and Render (backend).

---

## 🚀 Live Demo

🌐 https://url-shortener-frontend-two-alpha.vercel.app/

---

## 🛠 Tech Stack

- **Frontend:** Angular 20, TailwindCSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Unique ID Generator:** nanoid
- **Deployment:** Vercel (frontend), Render (backend)

---

## 📌 Features

- ✅ Generate short, unique URLs using `nanoid`
- 🔁 Automatic redirection to original URL
- 🌐 Persistent storage with MongoDB Atlas
- 📦 RESTful API integration
- 🎨 Responsive UI with Angular 20 & TailwindCSS
- 🔐 CORS and environment variable configuration for secure deployment

---

## 📂 Project Structure

url-shortener/
│
├── frontend/                # Angular 20 frontend
│   └── src/
│       └── app/
│           ├── components/
│           ├── services/
│
├── backend/                 # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
