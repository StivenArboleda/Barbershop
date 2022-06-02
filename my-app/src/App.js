import "./App.css";
import LoginComponent  from "./Component/login";
import {Menu} from "./Component/Menu";
import { useState } from "react";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const mode = "login";
function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("barber");
  const [checkedBarber, setCheckedBarber] = useState(false);
  const [checkedClient, setCheckedClient] = useState(false);
  return (
    <div className="App" id = "app">
      {!logged ? (
        <div className={`app app--is-${mode}`}>
          <LoginComponent
            mode={mode}
            onSubmit={function () {
              console.log("submit");
              setLogged(true);
            }}
            user = {user}
          />
           <div className="form-block__toggle-block">
             <h3>Are you a Barber or a Client?</h3>
             <Checkbox 
             icon={<ContentCutIcon/>} 
             checkedIcon={<CheckCircleOutlineIcon/>}
              checked={checkedBarber}
              onClick={() => {
                console.log("checkedClient", !checkedClient);
                setCheckedBarber(!checkedBarber);
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
