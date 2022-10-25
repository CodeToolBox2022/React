import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
const App=()=> {
  const[p,setP]=useState(0)
  const[t,setT]=useState(0)  
  const[r,setR]=useState(0)  
  const[si,setSi]=useState(0)  
  const calculateSi=()=>{
    setSi((p*t*r)/100);
    console.log(p);
}
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
    
    <center>
    <br></br>
      <TextField onChange={(event)=>setP(event.target.value)} id="standard-basic" label="Enter Principle" variant="standard"/><br/><br/>
      <TextField onChange={(event)=>setT(event.target.value)} id="standard-basic" label="Enter Time" variant="standard" /><br/><br/>
      <TextField onChange={(event)=>setR(event.target.value)} id="standard-basic" label="Enter Rate" variant="standard" /><br/><br/>
      <Button onClick={()=>calculateSi()} className='btn' variant="contained">Calculate</Button><br/><br></br>
      <TextField id="outlined-basic" label="Simple Interest" variant="outlined" value={si} /><br/>
      </center>
    </Box>
    </div>
  );
}

export default App;
