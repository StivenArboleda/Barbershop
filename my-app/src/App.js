import "./App.css";
import LoginComponent  from "./Component/login";
import {Menu} from "./Component/Menu";
import { useState } from "react";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import firebase from './firebase';
import { Alert } from "@mui/material";


const mode = "login";
function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("barber");
  const [checkefirebasearber, setCheckefirebasearber] = useState(false);
  const [checkedClient, setCheckedClient] = useState(false); 
 // const firebase = firebase.firestore();

const handleSubmit = async (event,mode) => {
    event.preventDefault();
    console.log("este es el mode ",mode);
    
    switch(mode){
      case "login":
        //setUser("barber");
       
        if(checkefirebasearber){
         const barber = await firebase.collection("barbers").doc(event.target.name.value).get().then(function(doc) {
            if (doc.exists) {
              setUser("barber");
            } else {
              console.log("No such document!");
            }
          }).catch(function(error) {
                   console.log("Error getting document:", error);
          });

          if(barber){
            setUser("barber");
            setLogged(true);
          }else{
            Alert({
              title: "Error",
              message: "Check the infotmatio or create an account first",
              severity: "error"
              });
          }
         
        }else{
        const client = await firebase.collection("clients").doc(event.target.name.value).get().then(function(doc) {
            if (doc.exists) {
              setUser("client");
            } else {
              console.log("No such document!");
            }
          }).catch(function(error) {
                   console.log("Error getting document:", error);
          });

          if(client){
            setUser("client");
            setLogged(true);
          }else{
            Alert({
              title: "Error",
              message: "Check the information or create an account first", 
              severity: "error"
              });
          }

        
        }
              
        break;
      case "singup":
        const newUser = {
          name: event.target.name.value,
          email: event.target.email.value,
          password: event.target.password.value,
          type: checkefirebasearber ? "barber" : "client",
        }
        try {
          const data = await firebase.collection("users").add(newUser);
          if(data){
            setUser(newUser.type);
            setLogged(true);
          }
        } catch (error) {
          console.log(error);
        }

        break;
      default:
        break;
    }

  };


  return (
    <div className="App" id = "app">
      {!logged ? (
        <div className={`app app--is-${mode}`}>
          <LoginComponent
            mode={mode}
            onSubmit={handleSubmit}
            user = {user}
          />
           <div className="form-block__toggle-block">
             <h3>Are you a Barber or a Client?</h3>
             <Checkbox 
             icon={<ContentCutIcon/>} 
             checkedIcon={<CheckCircleOutlineIcon/>}
              checked={checkefirebasearber}
              onClick={() => {
                console.log("checkedClient", !checkedClient);
                setCheckefirebasearber(!checkefirebasearber);
                setUser("barber");}
              
              }
              inputProps={{ 'aria-label': 'controlled' }}
             
             />
             <label>Barber</label>
             <br/>
             <Checkbox 
             icon={<AccessibilityNewIcon/>} 
             checkedIcon={<CheckCircleOutlineIcon/>} 
             checked={checkedClient}
              onClick={() => {
                console.log("checkedClient", !checkedClient);
                setCheckedClient(!checkedClient);
                setUser("client");}
              
              }
             />
             <label>Client</label>                 
          </div>
        </div>
      ) : (
        <Menu user={user} />
      )}
    </div>
  );
}

export default App;
