from flask import Flask, render_template, url_for, request, jsonify
from text_sentiment_prediction import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict-emotion', methods=["POST"])
def predict_emotion():
    
    # Get Input Text from POST Request
   
    input_data=request.json.get('sentence')
    if not input_data:
        # Response to send if the input_text is undefined
       emotion,img = predict(input_data)
       result = {
           'status':'success',
           'data':{
               'emotion':emotion,
               'img':img
           }
       }
       return jsonify(result)
        # Response to send if the input_text is not undefined
        
        # Send Response         
        
       
app.run(debug=True)



    