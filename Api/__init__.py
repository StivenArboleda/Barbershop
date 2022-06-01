from flask import Flask
from firebase_admin import credentials, initialize_app


cred = credentials.Certificate("Api/key.json")
default_app = initialize_app(cred)


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = '1234567890'
    
    from .userApi import userApi
    
    app.register_blueprint(userApi, url_prefix='/user')
    
    return app
