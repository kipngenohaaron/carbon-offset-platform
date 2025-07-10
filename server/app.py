# from flask import Flask, jsonify
# from flask_cors import CORS
# from routes.calculator import calculator
# from routes.auth import auth
# from database import init_db, db

# app = Flask(__name__)
# CORS(app)
# init_db(app)

# app.register_blueprint(calculator)
# app.register_blueprint(auth)

# @app.route('/')
# def index():
#     return jsonify({"message": "Carbon Offset Platform Backend is running"})

# if __name__ == '__main__':
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)
from routes.trade import trade
app.register_blueprint(trade)
from models import user, trade

from flask import Flask, jsonify
from flask_cors import CORS
from routes.calculator import calculator
from routes.auth import auth
from database import init_db, db

app = Flask(__name__)
CORS(app)
init_db(app)

app.register_blueprint(calculator)
app.register_blueprint(auth)

@app.route('/')
def index():
    return jsonify({"message": "Carbon Offset Platform Backend is running"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
