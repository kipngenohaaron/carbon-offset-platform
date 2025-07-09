from flask import Blueprint, request, jsonify

calculator = Blueprint('calculator', __name__)

@calculator.route('/api/calculate', methods=['POST'])
def calculate_emissions():
    data = request.get_json()
    transport_km = float(data.get('transport_km', 0))
    electricity_kwh = float(data.get('electricity_kwh', 0))
    flights_hours = float(data.get('flights_hours', 0))

    # Simple emission factors
    emissions = {
        "transport": transport_km * 0.12,        # kg CO₂ per km
        "electricity": electricity_kwh * 0.4,    # kg CO₂ per kWh
        "flights": flights_hours * 90.0          # kg CO₂ per hour of flight
    }

    total_kg = sum(emissions.values())
    total_tonnes = total_kg / 1000  # Convert to tonnes

    return jsonify({
        "emissions": emissions,
        "total_kg": round(total_kg, 2),
        "total_tonnes": round(total_tonnes, 3)
    })
