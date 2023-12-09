// Import necessary React and Material-UI components
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo or website name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         UrbanEdge
        </Typography>

        {/* Navigation links */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/new-development">
          New Development
        </Button>
        <Button color="inherit" component={Link} to="/new-development">
          List Your Property
        </Button>
        <Button color="inherit" component={Link} to="/listings">
          Why UrbanEdge
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact Us
        </Button>

        {/* Additional buttons, such as login or sign up */}
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
