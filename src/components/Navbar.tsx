import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // If you're using React Router
import listpic from '../images/list.png'
import email from '../images/message.gif'
import phone from '../images/phone.gif'
import address from '../images/home.gif'
import {
 
  Home as HomeIcon,
  MailOutline as ContactIcon,
  ExitToApp as SignInIcon,
  PersonAdd as SignUpIcon,
} from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const iconStyle = { color: 'black' };

  return (
    <AppBar position="static" style={{ display: "flex", backgroundColor: "#50595B" }}>
      <Toolbar>
        {/* Logo or website name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "#CFE1E8", fontStyle: "italic", fontSize: '40px' }}>
          ᴜʀʙᴀɴᴇᴅɢᴇ
        </Typography>

        {/* Navigation links */}
        <Button color="inherit" component={RouterLink} to="/">
        <HomeIcon style={iconStyle} />  Home
        </Button>
        

        {/* Contact Us dropdown */}
        <Button
          color="inherit"
          aria-controls="contact-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
        <ContactIcon style={iconStyle} /> Contact Us
        </Button>
        <Menu
          id="contact-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
         <MenuItem onClick={handleClose}>
            <img src={phone} alt="email" style={{ width: '20px', marginRight: '8px' }} />
            Phone: (123) 456-7890
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <img src={email} alt="email" style={{ width: '20px', marginRight: '8px' }} />
          Email: info@urbanedge.com</MenuItem>
          <MenuItem onClick={handleClose}>
          <img src={address} alt="email" style={{ width: '20px', marginRight: '8px' }} />
          Address: 123 Main St, City</MenuItem>
        </Menu>

        <Button color="inherit" component={RouterLink} to="/List-with-us" >
        <img src={listpic} style={{width:'20px', color:'white'}}alt='slide8' /> List Your Property
        </Button>

        {/* Additional buttons, such as login or sign up */}
        <Button color="inherit" component={RouterLink} to="/SignIn">
        <SignInIcon  style={iconStyle}/> SignIn
        </Button>
        <Button color="inherit" component={RouterLink} to="/SignUp">
        <SignUpIcon  style={iconStyle}/> SignUp
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
