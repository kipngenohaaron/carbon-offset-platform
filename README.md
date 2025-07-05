# 🌍 Carbon Emissions and Offsetting Platform

A professional and user-friendly web platform for calculating carbon footprints, trading verified carbon credits, and ensuring compliance with the **Kyoto Protocol**. The platform is designed to promote global sustainability by making carbon offsetting accessible, transparent, and legitimate.

---

## 🧑‍💻 Developed By
**Kipngenoh Aaron Rotich**  
ICT Trainer | Tech for Sustainability Advocate  
📧 Email: kipngenohaaron@gmail.com  
📞 Phone: +254 724 829 197 / +254 724 279 400  
🌍 Location: Kenya  

---

## 📌 Project Overview

This web-based system provides:
- Education and awareness on **carbon emissions** and **offsetting**.
- A secure **trading platform** for buying and selling carbon credits.
- Integration with **Kyoto Protocol compliance** frameworks.
- A **carbon offset calculator** to estimate environmental impact.
- A centralized **admin dashboard** to manage users, projects, and legitimacy.
- **Verification tools** to ensure trades are valid and impactful.

---

## 🚀 Features

| Feature                      | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| 🏠 Homepage                 | Introduction to carbon offsetting and Kyoto Protocol                       |
| 🔐 Authentication            | Secure login and signup for clients                                        |
| 🧮 Carbon Offset Calculator  | Users calculate emissions (e.g. by transport, energy use, etc.)            |
| 💰 Carbon Credit Trading     | Real-time browsing and purchasing of certified carbon credits              |
| 🧾 Kyoto Protocol Reference  | Linked resources and explanation of Kyoto compliance                      |
| 🧑‍💼 Admin Dashboard          | Admins manage carbon projects, credits, users, and verify trade legitimacy |
| ✅ Legitimacy Verification   | System to check and certify approved projects                             |

---

## 🛠 Tech Stack

| Layer        | Technologies Used                           |
|--------------|---------------------------------------------|
| Frontend     | React.js, Tailwind CSS                      |
| Backend      | Flask (Python), Flask-RESTful, Flask-CORS   |
| Database     | PostgreSQL (or SQLite for local dev)        |
| Auth         | Firebase Authentication / Flask JWT         |
| Hosting      | Netlify (Frontend), Render/Heroku (Backend) |
| APIs         | Carbon footprint & Kyoto data integrations  |

---

## 📁 Folder Structure

```

carbon-offset-platform/
│
├── client/                   # React frontend
│   ├── src/
│   │   ├── pages/            # Home, Login, Register, Calculator, Dashboard
│   │   ├── components/       # Navbar, Footer, Card, etc.
│   │   ├── services/         # API logic
│   │   └── App.js, index.js
│
├── server/                   # Flask backend
│   ├── app.py                # Main entry point
│   ├── models/               # SQLAlchemy models
│   ├── routes/               # Flask Blueprints (auth, trade, calc)
│   ├── requirements.txt
│   └── config.py, database.py
│
├── .gitignore
└── README.md

````

---

## ⚙️ Installation Guide

### 🔧 Prerequisites
- Node.js & npm
- Python 3 & pip
- Git

### 🖥️ Frontend (React)
```bash
cd client
npm install
npm start
````

### 🔥 Backend (Flask)

```bash
cd server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

---

## 🌐 Sample API Endpoints

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| GET    | `/`              | Backend health check       |
| POST   | `/api/login`     | User login                 |
| POST   | `/api/register`  | User registration          |
| POST   | `/api/calculate` | Carbon emission calculator |
| GET    | `/api/credits`   | List carbon credit options |
| POST   | `/api/trade`     | Buy a carbon credit        |

---

## 🔐 Security

* All transactions are HTTPS encrypted.
* User authentication uses Firebase/Auth0 or Flask-JWT.
* Trades are verified against approved offset projects.
* Admins can blacklist fraudulent accounts or trades.

---

## 🛣️ Roadmap

* 🌍 Add multilingual support (Swahili, French)
* 📱 Convert to PWA (Progressive Web App)
* 💳 Integrate payment options (MPESA, Stripe)
* 📜 Add Smart Contract support for Web3 carbon credit verification
* 📊 Admin analytics dashboard for trade statistics

---

## 📚 References

* [UNFCCC – Kyoto Protocol](https://unfccc.int/kyoto_protocol)
* [Gold Standard for the Global Goals](https://www.goldstandard.org/)
* [Carbon Offset API Documentation](https://docs.co2offset.io/)

---

## 📩 Contact

For contributions, partnerships, or technical support:

**Kipngenoh Aaron Rotich**
📧 Email: [kipngenohaaron@gmail.com](mailto:kipngenohaaron@gmail.com)
📞 Phone: +254 724 829 197 / +254 724 279 400
🌍 Location: Kenya

---

## 📜 License

MIT License © 2025 Kipngenoh Aaron Rotich

```
