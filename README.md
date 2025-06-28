# 🧠 Blackbox Clone – COSC Hackweek Challenge

A backend server built using **Express.js** to mimic the mysterious and undocumented behavior of the Blackbox Interface APIs. This project explores reverse engineering by handling various unpredictable endpoints and returning structured responses.

## 🚀 Live Testing Instructions

You can test the server locally:

http://localhost:3000/blackbox/<endpoint>

pgsql
Copy code

---

## 🛠️ Endpoints & Their Behavior

All endpoints accept **JSON POST requests** (except `/time`, which is a GET request).

| Method | Endpoint        | Description                             |
|--------|------------------|-----------------------------------------|
| POST   | `/blackbox/data` | Returns a test message for `/data`      |
| POST   | `/blackbox/fizzbuzz` | Returns a test message for `/fizzbuzz` |
| POST   | `/blackbox/zap`  | Returns a test message for `/zap`       |
| POST   | `/blackbox/alpha`| Returns a test message for `/alpha`     |
| POST   | `/blackbox/glitch`| Returns a test message for `/glitch`   |
| GET    | `/blackbox/time` | Returns the current server time in ISO format |

### 📌 Sample Payload Format (POST)

```json
{
  "data": "test input"
}
📁 Project Structure
php
Copy code
blackbox-clone/
├── routes/
│   └── blackbox.js       # All route handlers
├── app.js                # Main Express app
├── package.json
└── README.md
🧪 Testing the API
You can test the endpoints using:

✅ Postman

✅ curl (CLI)

✅ axios in Node.js (blackbox.js script for automation)

🧑‍💻 Tech Stack
Node.js

Express.js

📌 Challenge Objective
This project was submitted for the COSC Hackweek – Blackbox Challenge conducted by CBIT, where the task was to mimic the behavior of unknown endpoints purely through testing, experimentation, and reverse engineering.

✅ Author
Prabhugari Vihari
GitHub: @VIHARI1106

yaml
Copy code

---

### ✅ Next Step

1. Save this as `README.md` in the root of your project.
2. Run the following to commit and push:

```bash
git add README.md
git commit -m "Added README.md"
git push
