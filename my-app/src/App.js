import "./App.css";
import LoginComponent  from "./Component/login";
import {Menu} from "./Component/Menu";
import { useState } from "react";
import { BrowserRouter} from "react-router-dom";


const mode = "login";
function App() {
  const [logged, setLogged] = useState(false);
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
          />
        </div>
      ) : (
        <Menu user={"client"} />
      )}
    </div>
  );
}

export default App;
