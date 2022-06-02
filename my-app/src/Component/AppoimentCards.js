import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Card } from "@mui/material";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import { useEffect } from "react";
import firebase from '../firebase';
export const AppoimentCards = ({ user, handleClick ,status}) => {
  
  const [appoiments, setAppoiments] = useState([]);
  useEffect(() => {

      const getAppoiments = async () => {
     //   const firebase = firebase.firestore();
        try{
          const data = await firebase.collection('appoiments').get()
          const appoiments = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          if(appoiments.length > 0){
            setAppoiments(appoiments);
          }else{
            console.log('No hay citas');
            console.log(appoiments);
          }
        }catch(error){
          console.log(error);
        }
      
      }

      getAppoiments();




  }, []); 
    
  return (
    <div id="album">
      <Stack direction="row" spacing={2} className="card">
        {
          appoiments.map(appoiment => (
            <Card className="card" key={appoiment.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  className="cardMedia"
                  image="https://th.bing.com/th/id/OIP.qc8aczpQp6Gzi9KD5aIrlQHaE8?pid=ImgDet&rs=1"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {appoiment.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {appoiment.description}
                  </Typography>
                </CardContent>
                <IconButton aria-label="appoiment status">
                {
                    appoiment.status === 'pending' ? <LockIcon /> : <LockOpenIcon />
                }
            </IconButton>
              </CardActionArea>
              
            </Card>
          ))
        }
      </Stack>
    </div>
  );
};
