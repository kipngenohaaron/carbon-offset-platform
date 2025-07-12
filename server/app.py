from flask import Flask, jsonify
from flask_cors import CORS

# Use absolute imports because you're running as a module (`-m server.app`)
from server.routes.trade import trade
from server.routes.calculator import calculator
from server.routes.auth import auth

from server.database import init_db, db
from server.models import user, trade  # Importing ensures models are registered with SQLAlchemy

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from frontend
init_db(app)

# Register API route groups
app.register_blueprint(trade)
app.register_blueprint(calculator)
app.register_blueprint(auth)

# Root endpoint
@app.route('/')
def index():
    return jsonify({"message": "Carbon Offset Platform Backend is running"})

# Start server
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
