import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';


export const CreationComponent = ({ user, handleClick, dataClicked,input }) => {
    console.log("user", user);
    console.log("dataClicked", dataClicked);
   
  return (
    <div id ="album">
      {user === "barber" ? (
        <div>
          {dataClicked === "New client" ? (
            <div>
              <h1>Add a new client</h1>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Box>
              <Button variant="contained" color="success">
                Save
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div>
          {dataClicked === "New Appointment" ? (
            <div>
              <h1> New appointments</h1>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Box>

              <div>
                <h2>type a date for the appoiment</h2>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type={'date'}
                />
              </div>
              <br></br>
              <Button variant="contained" color="success">
                Save
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}

      {dataClicked === "New barber info" ? (
        <div>
          <h1> New Barber info</h1>
          <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Box>
              <Button variant="contained" color="success">
                Save
              </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
