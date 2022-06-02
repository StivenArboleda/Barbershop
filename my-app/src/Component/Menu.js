import { Sidebar } from "./SideBar";
import { PageCards } from "./PageCards";
import { BottonsNav } from "./BottonsNav";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PeopleIcon from '@mui/icons-material/People';
import {useState} from 'react';
import {CreationComponent} from "./CreationComponent";
import { ViewComponents } from "./ViewComponents";
import ReactDOM from 'react-dom/client';
import React from 'react';



export const Menu = ({ user }) => {
  const [value, setValue] = useState('');
  const [clicked, setClicked] = useState(false);
  const[dataClicked, setDataClicked] = useState("none");
  const [data, setData] = useState([]);
  const[ barSelected, setBarSelected] = useState('');
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  let root = null

  console.log(dataClicked);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = (event) => {
    setOpen(false);
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const selectedActions = (action) =>{
    if(action === "reset"){
       if(!root){
         root = ReactDOM.createRoot(document.getElementById('app'));
        }
//        setDataClicked("none");
  //      setClicked(false);
        root.render(<Menu user={user} />);
      //  root.render(<PageCards />);
    }else{
      console.log("accion", action);
      setDataClicked(action);
      setClicked(true);
      setBarSelected("botons nav");  
    }
    
  }


  const selectedView = (view) =>{
    console.log("funciona cabron", view);
    setDataClicked(view);
    setClicked(true);
    setBarSelected("side bar");
  }

  
  const handleClickOpen = () => {
    setOpen(true);
    handleClick("Edit info")
  };
  const handleClick = () => {
    console.log("clicked");
  }
  console.log("user", user);
  const isbarber = user === "barber";
  return (
    <div className="menu">  
    <BottonsNav 
      user={user}
      handleClick={
        selectedActions
      }
      handleClose={
        handleClose
      }
      handleClickOpen={
        handleClickOpen
      }
     
    />
    <div id="content">
        {
          !clicked? (
              <PageCards/> 
          )

          : (
              <div>
                {
                  barSelected === "side bar"? (
                    <ViewComponents
                      dataSelected={dataClicked}
                    />
                  )
                  : (
                    <CreationComponent 
                    user={user} 
                    dataClicked={dataClicked}
                    handleClick={handleClick}
                    input={input}             
                    />
                  )
                }
              </div>
            )
          }
             
      </div>
   
      <Sidebar
        width={200}
        height={900}
        children={
            <div>
                {
                    isbarber ? (
                      <BottomNavigation value={value} onChange={handleChange}>
                        <BottomNavigationAction
                          label="My clients"
                          value="clients"
                          icon={<EventAvailableIcon />}
                          onClick={() => selectedView("my Clients")}
                        />
                      </BottomNavigation>
                        
                    ) : (
                      <BottomNavigation value={value} onChange={handleChange}>
                      <BottomNavigationAction
                        label="My appointments"
                        value="appointments"
                        icon={<EventAvailableIcon />}
                        onClick={() => selectedView("my Appointments")}
                      />
                    </BottomNavigation>
                    )
                }
                <BottomNavigation value={value} onChange={handleChange}>
                        <BottomNavigationAction
                          label="Barbers"
                          value="barbers"
                          icon={<PeopleIcon />}
                          onClick={() => selectedView("Barbers")}
                        />
                      </BottomNavigation>
            </div>
        }
        
      />
    </div>
  );
};
