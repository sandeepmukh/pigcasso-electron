from flask import Flask, json, request, jsonify, session, Response, render_template
from flask_cors import CORS

from server.api import api

app = Flask(__name__)
CORS(app)
app.register_blueprint(api, url_prefix='/api')

app.debug = True # TODO disable
@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)