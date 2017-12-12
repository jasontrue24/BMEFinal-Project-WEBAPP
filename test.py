from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/api/images", methods=['POST'])
def images():
    raw_string = request.json
    print(raw_string)
    return "Done"
