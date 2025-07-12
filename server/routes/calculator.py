from flask import Blueprint, request, jsonify

calculator = Blueprint('calculator', __name__)

@calculator.route('/api/calculate', methods=['POST'])
def calculate_offset():
    data = request.get_json()
    distance = data.get('distance_km', 0)
    fuel_type = data.get('fuel_type', 'petrol')

    factor = 0.12 if fuel_type == 'diesel' else 0.10
    emissions = distance * factor

    return jsonify({
        'emissions_kg': emissions,
        'emissions_tonnes': emissions / 1000
    })
