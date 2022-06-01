import uuid
from flask import Blueprint, request, jsonify
from firebase_admin import firestore
import requests
from requests.exceptions import HTTPError

db = firestore.client()
user_Ref = db.collection('user')

userApi = Blueprint('userApi', __name__)

class Appontment:
    def __init__(self,barberName, date):
        self.barberName = barberName
        self.date = date
        self.status = False
        
class Barber:
    def __init__(self):
        self.clients = []

    def craeteBarber():
        return Barber()
    def addBarberAppointment(barber, appointment):
        barber.clients.append(appointment)
    
class Client:
    def __init__(self):
        self.appointments = []

@userApi.route('/add', methods=['POST'])
def create():
    try:
        id = uuid.uuid4()    
        user_Ref.document(request.json['id']).set(request.json)
        return jsonify({'status': True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@userApi.route('/test',methods=['GET','POST'])
def test():

    test = request.json
    db.collection("user").document(test['id']).update({
                "Name" : firestore.ArrayUnion(["Pedro"])
            })
    return jsonify({'status': test['Name']}), 200
@userApi.route('/addAppointment', methods=['POST','GET'])
def addAppo():
    try:
        if request.method == 'POST':
            id = uuid.uuid4()
            db.collection("user").doccument(request.headers['name']).update({
                "appointments" : firestore.ArrayUnion([request.headers])
                
            })
            request.headers['appointments']
            user_Ref.document(id.hex).set(request.json)
            return jsonfy({'status': True}), 200
        elif request.method == 'GET':
            return jsonify(user_Ref.get()), 200
    except Exception as e:
        return f"An Error Occured: {e}"
