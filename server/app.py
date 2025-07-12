from flask import Flask, jsonify
from flask_cors import CORS

from server.routes.trade import trade
from server.routes.calculator import calculator
from server.routes.auth import auth

from server.database import init_db, db
from server import models  # ✅ just register models, avoid name clash

app = Flask(__name__)
CORS(app)
init_db(app)

# Register route blueprints
app.register_blueprint(trade)
app.register_blueprint(calculator)
app.register_blueprint(auth)

@app.route('/')
def index():
    return jsonify({"message": "Carbon Offset Platform Backend is running"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
