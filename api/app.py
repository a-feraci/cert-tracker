from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React to call API

@app.route('/api/progress', methods=['GET'])
def get_progress():
    # Dummy data for now
    return jsonify({"module1": True, "module2": False})

@app.route('/api/progress', methods=['POST'])
def update_progress():
    data = request.json
    print("Received progress:", data)
    # Save to database later
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)
