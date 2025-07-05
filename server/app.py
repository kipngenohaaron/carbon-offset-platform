# server/app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to talk to this server

@app.route('/')
def index():
    return jsonify({"message": "Carbon Offset Platform Backend is running"})

if __name__ == '__main__':
    app.run(debug=True)
