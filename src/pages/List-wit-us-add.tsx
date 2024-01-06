import { Button, Grid, Typography } from '@mui/material';

import React, { useContext, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TellUs from '../images/TellUs.avif'
import { useNavigate } from 'react-router-dom';
import { UserContext  } from '../contex/userContex';
import ArrowRight from '@mui/icons-material/ArrowRight'; 
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
 
export const Listwitusform = () => {
  const [age, setAge] = React.useState<string | number>('');
  const [propertyType, setPropertyType] = React.useState<string | number>('');
  const [openPropertyType, setOpenPropertyType] = React.useState(false);
  const [openAge, setOpenAge] = React.useState(false);
  const { login, logout, user } = useContext(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(user !== null);


  
  const handleChangeAge = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleChangePropertyType = (event: SelectChangeEvent<typeof propertyType>) => {
    setPropertyType(event.target.value);
  };

  const handleClosePropertyType = () => {
    setOpenPropertyType(false);
  };

  const handleOpenPropertyType = () => {
    setOpenPropertyType(true);
  };

  const handleCloseAge = () => {
    setOpenAge(false);
  };

  const handleOpenAge = () => {
    setOpenAge(true);
  };

  // Replace with your actual authentication context
 
  const history = useNavigate();

  const handleDoneClick = () => {
    if (age === 10) {
      // User selected "Buy"
      if (isAuthenticated) {
        // User is logged in, navigate to the showcast page for Buy
        history('/ShowcastBuyPage');
      } else {
        // User is not logged in, navigate to the login page
        // In a real application, you may want to redirect back to this page after login
        history('/All-Showcast-Items');
      }
    }else if(age === 20){
      if(isAuthenticated){
        history('/Rent-Property-form')
      }
      else{
        history('/Rent-Property-form')
      }
    } else if (age === 30) {
      // User selected "Sell"
      if (isAuthenticated) {
        // User is logged in, navigate to another page for selling
        history('/List-with-us-form');
      } else {
        // User is not logged in, navigate to the login page
        // In a real application, you may want to redirect back to this page after login
        history('/List-with-us-form');
      }
    }
    // You can add more conditions based on other values if needed
  };

  return (
    <div>
      <Navbar/>
      <div
        className='LookingFor'
        style={{
          background: `url(${TellUs})`, // Set the background image
        backgroundSize: '25%', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h3' style={{ fontWeight: '700', color:'white' }}>
          Tell us what are you looking for?
        </Typography>

        <Grid container columns={12} sx={{ marginTop: '10vh' }}>
          
          <Grid item xs={11} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button sx={{ display: 'block', mt: 2,color:'white',fontWeight:'700' }} onClick={handleOpenAge}>
              I am looking to
            </Button>
            <FormControl sx={{ m: 1, minWidth: 220,color:'white' }}>
              <InputLabel id='demo-controlled-open-select-label'  style={{color:'white'}}>I'm looking</InputLabel>
              <Select
                labelId='demo-controlled-open-select-label'
                id='demo-controlled-open-select'
                open={openAge}
                onClose={handleCloseAge}
                onOpen={handleOpenAge}
                value={age}
                label='Age'
                onChange={handleChangeAge}
                style={{color:'white'}}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Buy a property</MenuItem>
                <MenuItem value={40}>Rent a propert</MenuItem>
                <MenuItem value={30}>Sell my property</MenuItem>
                <MenuItem value={20}>Rent my property</MenuItem>
              </Select>
            </FormControl>
          
          </Grid>
         
        </Grid>
        
        <Button variant='contained' style={{marginTop:'10vh'}} onClick={handleDoneClick}/*component={RouterLink} to="/List-with-us-form"*/>
          Done
        </Button>
      </div>
      <Typography variant='h5' style={{display:'grid', placeItems:'center', fontWeight:'700', marginTop:'3vh'}}>Our posting rules</Typography>
     
     <Grid container xs={12} sx={{width:'270vh', display:"fixed", justifyContent:"center",marginTop:'6vh' }}>
      <Grid xs={10}>
      <Typography variant='subtitle1' style={{}}>
      <ArrowRight />   Make sure you post in the correct category.</Typography>
      <Typography variant='subtitle1'><ArrowRight /> Do not post the same add more than once or repost an ad within 7 days.</Typography>
      <Typography variant='subtitle1'><ArrowRight />  Do not upload pictures with watermarks.</Typography>
      <Typography variant='subtitle1'><ArrowRight /> Do not post ads containing multiple items unless it's a package deal.</Typography>
      <Typography variant='subtitle1'><ArrowRight />  Do not put your email or phone numbers in the title or description.</Typography>
     
    
      </Grid>
     </Grid>
   
  
     <Footer/>
    </div>
  );
};
