from flask import Flask, request, jsonify
from prediction import get_prediction
from flask_cors import CORS
import matplotlib.image as mpimg
import base64
import numpy
app = Flask(__name__)
cors = CORS(app)
count = 0

@app.route('/')
def hello_world():
    global count
    count += 1
    return "Hello, world"


@app.route('/test')
def process_image():
    with open('/images/test_image.jpg', "rb") as file:
        encode_data = base64.b64encode(file.read())
        return encode_data


@app.route('/classify', methods=['POST'])
def classify():
    """
    Input base 64 encoded (x, y, 3) image data
    :return: classification label, prediction
    """
    global count
    count += 1
    try:
        input_data = request.json["data"]
        encoded_data = input_data[input_data.find(',')+1:]
        decoded_data = base64.b64decode(encoded_data)
        
        with open('TESTME.jpg', 'wb') as wfile:
            wfile.write(decoded_data)
        
        img = mpimg.imread('TESTME.jpg')
        (labels, p) = get_prediction(img)
        predictions = p.tolist()
        classification_mela = "false"
        if predictions[1] >= 0.5:
            classification_mela = "true"
        data = {"labels": labels,
                "predictions": predictions,
                "melanocytic": classification_mela}
        return jsonify(data), 200
        #ret_str = "This image is predicted to be " + predictions*100.0 + "% malignant."
        #return ret_str, 200
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
