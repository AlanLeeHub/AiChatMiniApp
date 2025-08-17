
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # 启用跨域资源共享，允许所有来源

# 目标 Ollama API URL
OLLAMA_API_URL = 'http://localhost:11434/api/chat'

@app.route('/api/chat', methods=['POST'])
def proxy_request():
    # 从微信小程序接收的请求
    json_data = request.get_json()

    # 转发到 Ollama
    response = requests.post(OLLAMA_API_URL, json=json_data)

    # 返回 Ollama 的响应
    return jsonify(response.json()), response.status_code

if __name__ == '__main__':
    app.run(port=5000)