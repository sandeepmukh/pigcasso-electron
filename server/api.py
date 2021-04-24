from flask import Flask, json, request, jsonify, session, Response, Blueprint

api = Blueprint('api', __name__)

from server.styletransfer import *

# @api.before_app_first_request
# def init():
#     return 
NUM_ITER = 250

@api.route('/processImage', methods=['POST'])
def process_image():
    """
    Example body:
    {
        "path" : string-like
    }
    """
    content_path = request.json["path"]
    style_path = "./src/img/picasso_style.jpg"
    run_style_transfer(content_path, style_path, NUM_ITER)
    return Response('Processing', status=200)

@api.route('/pct', methods=['GET'])
def get_pct():
    with open('./src/processing_data/iter.json') as f:
        data = json.load(f)
    data["iterations"] = int(data["iterations"] / NUM_ITER * 100)
    return Response(json.dumps(data), status=200)
