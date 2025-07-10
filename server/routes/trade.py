from flask import Blueprint, request, jsonify
from models.trade import Trade
from database import db

trade = Blueprint('trade', __name__)

@trade.route('/api/trade', methods=['POST'])
def create_trade():
    data = request.get_json()
    trade = Trade(
        user_email=data['email'],
        credit_amount=data['credit_amount'],
        price_per_tonne=data['price_per_tonne'],
        trade_type=data['trade_type']
    )
    db.session.add(trade)
    db.session.commit()
    return jsonify({'message': 'Trade created successfully'}), 201

@trade.route('/api/trades/<email>', methods=['GET'])
def get_user_trades(email):
    trades = Trade.query.filter_by(user_email=email).all()
    result = [
        {
            'id': t.id,
            'amount': t.credit_amount,
            'type': t.trade_type,
            'price': t.price_per_tonne,
            'time': t.timestamp.strftime('%Y-%m-%d %H:%M')
        } for t in trades
    ]
    return jsonify(result)
