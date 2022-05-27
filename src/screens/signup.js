import { Grid,Paper, TextField, Typography ,Button } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import {Link} from 'react-router-dom';
function Signup(){
    return<>
  <div>
  <Grid>
  <Paper class="main">
    <Grid align ='center'>
    <AddCircleOutlinedIcon/>
    <h1 class = 'head'>Sign up</h1>
    <Typography variant="caption">Please fill this form to create an account!</Typography>
    </Grid>
    <form>
      <TextField fullWidth label='Name' placeholder = 'Enter Your Name'/>
      <TextField fullWidth label='Email' style = {{marginTop : '20px'}} />
      <FormControl >
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup style = {{display:'initial'}}
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>
      <TextField fullWidth label='Phone Number'/>
      <TextField fullWidth label='Password'style = {{marginTop : '20px'}} />
      <TextField fullWidth label='Confirm Password' style = {{marginTop : '20px'}}/>
      <FormGroup>
  <FormControlLabel control={<Checkbox/>} label="I accept the terms and conditions" />
</FormGroup>
      <Button type = 'submit' variant = 'contained' color = 'primary' style = {{marginTop : '20px' , marginLeft : '20px'}}>SIGNUP</Button>  
    <Button variant = 'contained' color = 'primary'style = {{marginTop : '20px' , marginLeft : '20px'}}><Link to = './Signin'>SIGNIN</Link></Button>
    
    </form> 
</Paper>
</Grid>
</div>

</>
 
};
export default Signup;