# Ollama WeChat Mini Program Setup Guide

This guide walks you through setting up Ollama on WSL2 and configuring a WeChat Mini Program to interact with it.

## Prerequisites
- Windows 10/11 with WSL2 support
- WeChat Developer Tools
- ngrok account (for tunneling)

## Setup Instructions

### 1. Install WSL2 on Windows
Install Windows Subsystem for Linux 2 on your Windows machine.

### 2. Install Ubuntu on WSL2
Set up Ubuntu distribution within your WSL2 environment.

### 3. Install Ollama and Download LLM Models
Install Ollama in Ubuntu and download the required Large Language Models, such as:
```bash
ollama pull mistral:latest
```

### 4. Configure Network Between Windows and WSL2
Adjust network settings to ensure connectivity between Windows host and WSL2. Verify that you can access Ollama from Windows using `localhost:11434`.

**Verification:** Open your browser and navigate to `http://localhost:11434/`. You should receive the message "Ollama is running" if the setup is successful.

### 5. Clone the Project Repository
Clone the AiChatMiniApp repository to your local directory:
```bash
git clone https://github.com/AlanLeeHub/AiChatMiniApp.git
cd AiChatMiniApp
```

### 6. Create Virtual Environment
Create a Python virtual environment:
```bash
uv venv
```

### 7. Activate Virtual Environment
Activate the virtual environment:
```bash
.\.venv\Scripts\activate
```

### 8. Install Python Dependencies
Install the required Python packages:
```bash
uv pip install -r ./requirements.txt
```

### 9. Start Bridge Server
Launch the bridge server on the same machine as Ollama (e.g., listening on port 5000):
```bash
python.exe .\bridgeServer.py
```

### 10. Start Network Tunneling Tool
Use ngrok to create a tunnel for the bridge server:
```bash
ngrok http 5000
```

### 11. Configure Mini Program Backend
Add the randomly generated domain from the tunneling tool (e.g., `https://570c99555c25.ngrok-free.app`) to the "request合法域名" (Request Legal Domain) list in your Mini Program backend configuration.

### 12. Start Debugging
Clear all cache in WeChat Developer Tools and begin debugging.

## Notes
- Ensure all services are running before testing
- The ngrok URL will change each time you restart it (unless using a paid plan)
- Remember to update the domain configuration whenever the ngrok URL changes

## Troubleshooting
- If you can't access `localhost:11434`, check WSL2 network configuration
- Verify all Python dependencies are installed correctly
- Ensure the bridge server is running on the correct port
- Check that the ngrok tunnel is active and accessible
# Ollama WeChat Mini Program Setup Guide