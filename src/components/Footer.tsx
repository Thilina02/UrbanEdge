import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: '#50595B',
  padding: theme.spacing(4),
  color: theme.palette.common.white,
}));

const StyledContactInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Grid container spacing={3}>
        {/* Contact Information */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us 
          </Typography>
          <StyledContactInfo>
            <PhoneIcon />
            <Typography>+1 (123) 456-7890</Typography>
          </StyledContactInfo>
          <StyledContactInfo>
            <EmailIcon />
            <Typography>info@urbanedge.com</Typography>
          </StyledContactInfo>
          <StyledContactInfo>
            <LocationOnIcon />
            <Typography>123 Main Street, Cityville</Typography>
          </StyledContactInfo>
        </Grid>

        {/* Property Search */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant='h6'>UrbanEdge</Typography>
          <Typography variant="subtitle1" gutterBottom>
            UrbanEdge, your gateway to exceptional properties. 
            Elevate your lifestyle with our curated selection of homes, 
            where luxury meets innovation in every corner.
          </Typography>
          {/* Add SocialIcons component here */}
          
        </Grid>

        {/* Additional Links */}
        <Grid item xs={12} md={4}>
          {/* Add your additional links here */}
        </Grid>
      </Grid>
      <div className="text-center p-3" 
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-dark" href="" style={{ color: 'black' }}>
          UrbanEdge.com
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
