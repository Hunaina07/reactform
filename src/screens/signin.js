import React from 'react';
import { Grid,Paper, TextField,Typography ,Button } from '@mui/material';
import {Link} from 'react-router-dom';


function Signin(){
    return<>
    <div>
   <Grid>
  <Paper class="main">
    <Grid align ='center'>
    <h1 class = 'head'>Log in</h1>
    </Grid>
    <form>
      <TextField fullWidth label='Name' placeholder = 'Enter Your Name'  style = {{marginTop : '20px'}}/>
      <TextField fullWidth label='Email' style = {{marginTop : '20px'}} />
       <Typography  style = {{marginTop : '20px'}}> 
          Forgot password?
   </Typography>
     <Button type = 'submit' variant = 'contained' color = 'primary' style = {{marginTop : '20px' , marginLeft : '20px'}}>LOG IN</Button>  
     <Button variant = 'contained' color = 'primary'style = {{marginTop : '20px' , marginLeft : '20px'}}><Link to = '../Main'>Dashboard</Link></Button>
   </form>
</Paper>
</Grid>
</div>
    </>
};
export default Signin