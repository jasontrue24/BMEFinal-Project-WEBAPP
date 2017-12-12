from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, world2'

def dataconversion():
    base64img="""we get from online"""
    for i in base64img.keys():
        img = base64img[i]
        imgstring = base64.b64decode(img)
        imgconverted = open('*****.jpg'.format(i), 'wb')
        imgconverted.write(imgstring)


        
