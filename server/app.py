from flask import Flask, jsonify
from flask_cors import CORS

from server.routes.trade import trade
from server.routes.calculator import calculator
from server.routes.auth import auth

from server.database import init_db, db
from server.models import user, trade  # ensures model registration

app = Flask(__name__)
CORS(app)
init_db(app)

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
