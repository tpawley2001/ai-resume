#!/usr/bin/env python3
"""
Simple webhook server for resume visitor notifications
Runs on localhost:3001 and forwards to Telegram
"""
from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import urllib.request
import urllib.parse
import threading
import os

# Telegram config
BOT_TOKEN = "8593678914:AAG2rlnXL3SE_HfGpjuK6NGpNRM-Lgl7Pmk"
CHAT_ID = "6086511173"
TELEGRAM_API = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

class NotificationHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def do_POST(self):
        if self.path == '/api/notify':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data)
                message = data.get('message', 'Visitor on resume')
                visitor = data.get('visitor', {})
                
                # Send to Telegram
                success = send_telegram_notification(message, visitor)
                
                self.send_response(200 if success else 500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                
                response = {'success': success}
                self.wfile.write(json.dumps(response).encode())
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        else:
            self.send_response(404)
            self.end_headers()
    
    def log_message(self, format, *args):
        # Suppress default logging
        pass

def send_telegram_notification(message, visitor):
    """Send notification to Telegram"""
    try:
        payload = {
            'chat_id': CHAT_ID,
            'text': message,
            'parse_mode': 'Markdown'
        }
        
        data = urllib.parse.urlencode(payload).encode()
        req = urllib.request.Request(TELEGRAM_API, data=data, method='POST')
        
        with urllib.request.urlopen(req, timeout=10) as response:
            result = json.loads(response.read().decode())
            return result.get('ok', False)
            
    except Exception as e:
        print(f"Telegram notification failed: {e}")
        return False

def run_server(port=3002):
    """Start the notification server"""
    server = HTTPServer(('0.0.0.0', port), NotificationHandler)
    print(f"✅ Notification server running on http://localhost:{port}")
    print(f"📱 Telegram notifications will be sent to chat ID: {CHAT_ID}")
    server.serve_forever()

if __name__ == '__main__':
    run_server()
