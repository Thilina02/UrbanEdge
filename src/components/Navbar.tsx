// Import necessary React and Material-UI components
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // If you're using React Router


const Navbar = () => {
  return (
    <AppBar position="static" style={{display:"flex", backgroundColor:"#000000"}}>
      <Toolbar>
        {/* Logo or website name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:"#CFE1E8", fontStyle:"italic"}}>
        𝕌𝕣𝕓𝕒𝕟𝔼𝕕𝕘𝕖
        </Typography>

        {/* Navigation links */}
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/new-development">
          New Development
        </Button>
        <Button color="inherit" component={RouterLink} to="/List-with-us">
          List Your Property
        </Button>
      
        <Button color="inherit" component={RouterLink} to="/contact">
          Contact Us
        </Button>

        {/* Additional buttons, such as login or sign up */}
        <Button color="inherit" component={RouterLink} to="/SignIn">
          SignIn
        </Button>
        <Button color="inherit" component={RouterLink} to="/SignUp">
          SignUp
        </Button>
      
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
