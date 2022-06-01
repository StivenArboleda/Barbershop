import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "./styles/NavBar.css";

export function BottonsNav({ user, handleClick}) {
  const [value, setValue] = React.useState("recents");
  const isbarber = user === "barber";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        {isbarber ? (
          <BottomNavigationAction
            label="Add a new client"
            value="New client"
            icon={<FavoriteIcon />}
            onClick={() => handleClick("New client")}
          />
        ) : (
          <BottomNavigationAction
            label="New Appointment"
            value="New Appointment"
            icon={<FavoriteIcon />}
            onClick={() => handleClick("New Appointment")}
          />
        )}
        <BottomNavigationAction
          label="New barber info"
          value="Add barber info"
          icon={<LocationOnIcon />}
          onClick={() => handleClick("New barber info")}
        />
        <BottomNavigationAction
          label="Logout"
          value="Logout"
          icon={<LogoutIcon />}
          onClick={() => {
            console.log("clicked");
            localStorage.clear();
            window.location.href = "/";
          }}
        />
          <BottomNavigationAction
          label="Back"
          value="back"
          icon={<ArrowBackIcon />}
          onClick={() => handleClick("reset")}
        />


      </BottomNavigation>
    </div>
  );
}
