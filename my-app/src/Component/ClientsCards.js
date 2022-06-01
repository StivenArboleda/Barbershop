
import { Card } from "@mui/material";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import {UserData} from "./UserData";
import {useState} from 'react';
export const ClientsCards = ({ user, handleClick }) => {
  const [clicked, setClicked] = useState(false);
    return (
      <div>
      {
        !clicked ? (
          <Stack direction="row" spacing={2} className= "card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={
              () => {
                console.log("clicked");
                setClicked(true);
              }
            }>
              <CardMedia
                component="img"
                height="140"
                image="https://th.bing.com/th/id/OIP.qc8aczpQp6Gzi9KD5aIrlQHaE8?pid=ImgDet&rs=1"
                alt="barbero"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cliente
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  barbers are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
    
    
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
            
              onClick={
                () => {
                  console.log("clicked");
                  setClicked(true);
                }
              }
            
            >
              <CardMedia
                component="img"
                height="140"
                image="https://th.bing.com/th/id/OIP.qc8aczpQp6Gzi9KD5aIrlQHaE8?pid=ImgDet&rs=1"
                alt="barbero"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cliente 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  barbers are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
    
    
        </Stack>) : (
          <div id="album">
            <h1>Album</h1>
            <UserData/>
          </div>
        )
      }
    </div>
    );
}