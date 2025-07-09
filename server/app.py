from flask import Flask, jsonify
from flask_cors import CORS
from routes.calculator import calculator

app = Flask(__name__)
CORS(app)

# Register calculator blueprint
app.register_blueprint(calculator)

@app.route('/')
def index():
    return jsonify({"message": "Carbon Offset Platform Backend is running"})

if __name__ == '__main__':
    app.run(debug=True)
