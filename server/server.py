from flask import Flask, request, Response,jsonify
from flask_cors import CORS
from gramformers import correct

app = Flask(__name__)
CORS(app)

cumulative = ['']
@app.route('/gramformer', methods=['GET', 'POST'])  
def home():
    data = request.get_json()
    if request.method == 'POST': 
         cumulative[0] = str(data)
         return 'data received'
    else:
        data = correct(str(cumulative[0]))
        return jsonify({"data":data})

if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)