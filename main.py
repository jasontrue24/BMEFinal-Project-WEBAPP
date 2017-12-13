from flask import Flask, request, jsonify
from prediction import get_prediction
import matplotlib.image as mpimg
import base64
import numpy
app = Flask(__name__)
count = 0

@app.route('/')
def hello_world():
    global count
    count += 1
    return "Hello, world"


@app.route('/test')
def process_image():
    with open('/images/TESTME.png', "rb") as file:
        encode_data = base64.b64encode(file.read())
        return encode_data


@app.route('/classify')
def classify():
    """
    Input (x, y, 3) numpy.ndarray
    :return: classification label, prediction
    """
    global count
    count += 1
    try:
        img = mpimg.imread('/images/TESTME.png')
        (labels, p) = get_prediction(img)
        predictions = p.tolist()
        classification_mela = "false"
        if predictions[1] >= 0.5:
            classification_mela = "true"
        data = {"labels": labels,
                "predictions": predictions,
                "melanocytic": classification_mela}
        return jsonify(data), 200
    except Exception as e: #generic error handling
        return "ERROR: " + str(e), 400
    
        
@app.route("/requests")
def requests():
    """
    :return: the total number of the requests the web service has served
    """
    global count
    count += 1
    data = {"number of requests": count}
    return jsonify(data), 200