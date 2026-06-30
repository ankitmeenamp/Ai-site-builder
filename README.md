# 🚀 AI Site Builder

An AI-powered full-stack website builder that enables users to generate, edit, preview, and manage websites using AI. The project integrates OpenAI for AI-generated content, Better Auth for authentication, Stripe for credit purchases, and PostgreSQL with Prisma for database management.

---

## ✨ Features

- 🤖 AI Website Generation
- ✏️ AI Revision & Editing
- 🔐 User Authentication (Better Auth)
- 💳 Stripe Payment Integration
- 💰 Credit-Based System
- 📁 Project Management
- 🌙 Light & Dark Theme
- 📱 Responsive UI
- ⚡ Fast Development with Vite
- 🗄️ PostgreSQL Database
- 🔥 Prisma ORM

---

## 🛠️ Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM
- Axios
- Better Auth UI
- Lucide React
- Sonner
- Radix UI

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Better Auth
- OpenAI API
- Stripe API
- CORS
- Dotenv

---

# 📁 Project Structure

# 📁 Project Structure

```
AI-Site-Builder/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── configs/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── providers.tsx
│   ├── .env
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── README.md
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── lib/
│   ├── middlewares/
│   ├── prisma/
│   ├── routes/
│   ├── types/
│   ├── server.ts
│   ├── package.json
│   └── README.md
│
├── README.md
└── .gitignore

```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Ankitmeenamp/AI-Site-Builder.git
```

Move into the project

```bash
cd AI-Site-Builder
```

---

## 📦 Install Frontend

```bash
cd client
npm install
```

Run

```bash
npm run dev
```

---

## 📦 Install Backend

Open another terminal

```bash
cd server
npm install
```

Run

```bash
npm run server
```

or

```bash
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
DATABASE_URL=

OPENAI_API_KEY=

STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

CLIENT_URL=http://localhost:5173

PORT=5000
```

---

# 🗄️ Prisma

Generate Prisma Client

```bash
npx prisma generate
```

Run Migration

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# 🚀 Available Scripts

### Frontend

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run preview
```

```bash
npm run lint
```

### Backend

```bash
npm run server
```

```bash
npm start
```

---

# 📡 API Features

- Authentication
- User Management
- AI Website Generation
- AI Website Revision
- Project Management
- Credit Management
- Stripe Checkout
- Stripe Webhooks

---

# 📸 Screenshots

### Home Page

_Add screenshot here_

---

### Dashboard

_Add screenshot here_

---

### AI Editor

_Add screenshot here_

---

### Preview

_Add screenshot here_

---

# 🔮 Future Improvements

- Deploy websites with one click
- Custom domain support
- Real-time collaboration
- Drag & Drop Editor
- AI Image Generation
- Multiple Templates
- Version History
- Team Workspace

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Ankit Meena**

GitHub: https://github.com/Ankitmeenamp

---

⭐ If you found this project helpful, don't forget to star the repository!
