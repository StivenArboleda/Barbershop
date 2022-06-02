import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useState } from "react";
import { Card } from "@mui/material";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
export const AppoimentCards = ({ user, handleClick ,status}) => {
  return (
    <div id="album">
      <Stack direction="row" spacing={2} className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/OIP.qc8aczpQp6Gzi9KD5aIrlQHaE8?pid=ImgDet&rs=1"
              alt="barbero"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cita
              </Typography>
              <Typography variant="body2" color="text.secondary">
                barbers are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <IconButton aria-label="appoiment status">
                {
                    status === 'pending' ? <LockIcon /> : <LockOpenIcon />
                }
            </IconButton>
          </CardActionArea>
        </Card>
      </Stack>
    </div>
  );
};
