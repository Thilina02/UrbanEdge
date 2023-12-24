import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(4),
  color: theme.palette.common.white,
}));

const StyledContactInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledSearch = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledSearchInput = { flex: 1 };

const StyledSearchButton = { marginLeft: 2 };

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
          <Typography variant="h6" gutterBottom>
            Property Search
          </Typography>
          <StyledSearch>
            <TextField
              variant="outlined"
              placeholder="Search for properties"
              sx={StyledSearchInput}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={StyledSearchButton}
            >
              Search
            </Button>
          </StyledSearch>
        </Grid>

        {/* Additional Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          {/* Add your additional links here */}
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
