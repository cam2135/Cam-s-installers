# 🖥️ CliCom — Terminal Chat Client

**CliCom** is a lightweight terminal-based chat client written in Python.  
It connects to a WebSocket server and lets you chat in real time, with built-in stats, commands, and server status.

---

## 🚀 Features

- 💬 Real-time chat through WebSockets  
- 👤 Persistent username saved locally  
- 📊 Message stats (sent / received)  
- 🔔 Automatic “user joined” / “user left” messages  
- 🕒 Server status ping every 10 minutes  
- 🛠️ Simple command system:
  - `/help` — Show available commands  
  - `/name <newname>` — Change your username  

---

## 🧰 Requirements

- Windows 10 or later
- Python 3.8+ (for building)
- Internet connection

---

## 🧪 Running from Source (Python)

1. Clone or download this repository.  
2. Install dependencies:
   ```bash
   pip install websocket-client
