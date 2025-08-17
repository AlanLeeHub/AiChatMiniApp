Page({
  data: { prompt: '', response: '' },
  onInput: function(e) { this.setData({ prompt: e.detail.value }); },
  sendToAI: function() {
    var that = this; // Preserve 'this' context for setData
    wx.request({
      // Change to your Ollama host, e.g., 'https://your-ngrok-url/api/chat' for remote access
      //url: 'http://localhost:11434/api/chat',
      url: 'https://570c99555c25.ngrok-free.app/api/chat', 
      method: 'POST',
      header: { 'Content-Type': 'application/json' }, // No auth header needed for local Ollama
      data: {
        model: 'mistral:latest', // Replace with your pulled model, e.g., 'llama3' or 'mistral'
        messages: [
          {
            role: 'user',
            content: this.data.prompt
          }
        ],
        stream: false // Get full response at once; set to true for streaming if you handle it
      },
      success: (res) => {
        if (res.statusCode === 200) {
          // Extract the AI response from Ollama's format
          this.setData({ response: res.data.message.content });
        } else {
          console.error('Ollama API error:', res);
          wx.showToast({ title: 'Error: ' + res.statusCode, icon: 'none' });
        }
      },
      fail: (err) => {
        console.error('Request failed:', err);
        wx.showToast({ title: 'Network error', icon: 'none' });
      }
    });
  }
})