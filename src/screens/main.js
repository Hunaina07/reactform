import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {Link} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import Home from '../screens/main'
  import About from '../screens/main'
  import Contact from '../screens/main'
  import Services from '../screens/main';

function  Main(){
    return<>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <div>
        <ul class = 'sidebars'>
    <Link to ='/home'><li>  Home </li></Link>
    <Link to = '/about'><li>About</li></Link>
    <Link to = '/contact'><li>Contact</li></Link>
    <Link to = '/services'><li>services</li></Link>
    </ul>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      </div>

    </>
};


export default Main
