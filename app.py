from flask import Flask
from flask_cors import CORS, cross_origin
from Api import create_app

app = create_app()

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001, debug=True)

