import uuid
from flask import Blueprint, request, jsonify
from firebase_admin import firestore
from google.cloud.firestore_v1 import ArrayUnion
import json

db = firestore.client()

user_Ref = db.collection('user')
appointments_Ref = db.collection('appointments')
barber_Ref = db.collection('barbers')
clients_Ref = db.collection('clients')

userApi = Blueprint('userApi', __name__)

class Appointment:
    def __init__(self,barberName, date):
        self.barberName = barberName
        self.date = date
        self.status = False
        
class Barber:
    def __init__(self, username, password,utype):
        self.id = ""
        self.username = username
        self.password = password
        self.type = utype
        self.clients = []

    def craeteBarber():
        return Barber()
    def addBarberAppointment(barber, appointment):
        barber.clients.append(appointment)
    

class User:
    def __init__(self, username, password, utype):
        self.id = ""
        self.username = username
        self.password = password
        self.utype = utype
class Client:
    
    
    def __init__(self, username, password, utype):
        self.id = ""
        self.username = username
        self.password = password
        self.type = utype
        self.appointments = []

@userApi.route('/createClient', methods=['POST', 'GET'])
def createClient():
    try:
        id = uuid.uuid1()
        #print(request.json)
        #print(request.json['username'], request.json['password'], request.json['type'])
        client = Client(request.json['username'], request.json['password'], request.json['type'])
        client.id = id.hex
        st = json.loads(json.dumps(client.__dict__))
        
        user = User(request.json['username'], request.json['password'], request.json['type'])
        user.id = id.hex
        lt = json.loads(json.dumps(user.__dict__))

        user_Ref.document(user.username).set(lt)
        clients_Ref.document(client.id).set(st)
        return jsonify({'status': st})
    except Exception as e:
        return f"An Error Ocurred: {e}"


@userApi.route('/createBarber', methods=['POST', 'GET'])
def createBarber():
    try:
        id = uuid.uuid1()
        #print(request.json)
        #print(request.json['username'], request.json['password'], request.json['type'])
        barber = Barber(request.json['username'], request.json['password'], request.json['type'])
        barber.id = id.hex
        st = json.loads(json.dumps(barber.__dict__))
        
        user = User(request.json['username'], request.json['password'], request.json['type'])
        user.id = id.hex
        lt = json.loads(json.dumps(user.__dict__))

        user_Ref.document(user.username).set(lt)
        barber_Ref.document(barber.id).set(st)
        return jsonify({'status': st})
    except Exception as e:
        return f"An Error Ocurred: {e}"

@userApi.route('/addAppointment', methods=['GET','POST'])
def addAppointment():
    if request.method == 'POST':
        try:
            appo = Appointment(request.json["barber"], request.json["date"])
            db.collection("clients").document(request.json["id"]).update({"appointments": firestore.ArrayUnion([json.loads(json.dumps(appo.__dict__))])})
            return jsonify({'status' : json.loads(json.dumps(appo.__dict__))})
        except Exception as e:
            return f"An Error Ocurred: {e}"
    else:
        try:
            collections = db.collection("clients").document(request.json["id"]).collections()
            print(collections)
            for collection in collections:
                for doc in collection.stream():
                    print(f'{doc.id} => {doc.to_dict()}')
            db.collection("clients").document(request.json["id"]).update({"appointments": firestore.ArrayRemove([request.json["appointments"]])})
            return jsonify({'status' : True})
        except Exception as e:
            return f"An Error Ocurred: {e}"

@userApi.route('/userLogin', methods=['GET'])
def userLogin():
    try:
        data = user_Ref.document(request.json['username']).get()
        d = data.to_dict()
        if (d['username'] == request.json['username']) and (d['password'] == request.json['password']):
            return jsonify({'status': True}), 200
        else:
            return jsonify({'status': False}), 200
        
    except Exception as e:
        return f"An Error Occured: {e}"

    

#name, email, passworrd, utype
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
            db.collection("user").document(request.headers['name']).update({
                "appointments" : firestore.ArrayUnion([request.headers])
                
            })
            request.headers['appointments']
            user_Ref.document(id.hex).set(request.json)
            return jsonfy({'status': True}), 200
        elif request.method == 'GET':
            return jsonify(user_Ref.get()), 200
    except Exception as e:
        return f"An Error Occured: {e}"
