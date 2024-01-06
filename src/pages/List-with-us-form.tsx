//RentProperty
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { Grid, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';


function ListwithUs() {
const [title, setTitle] = useState('');
const [perches, setPerches] = useState('');
const [rooms, setRooms] = useState('');
const [bedrooms, setBedrooms] = useState('');
const [bathrooms, setBathrooms] = useState('');
const [address, setAddress] = useState('');
const [price, setPrice] = useState('');
const [furtherEnquiries, setFurtherEnquiries] = useState('');
const [photos, setPhoto] = useState('');
const [successmessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [negotiable, setNegotiable] = useState<boolean | undefined>(undefined);
const [city, setCity] = useState('');
// OR
// const [negotiable, setNegotiable] = useState<boolean>(false);

const navigate = useNavigate();

const handleSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  try{

    //send input to the server

    const response = await axios.post('http://localhost:8070/listings/submit-listing',{
      title,
      perches,
      rooms,
      bedrooms,
      bathrooms,
      address,
      price,
      furtherEnquiries,
      negotiable,
      photos,
      city,
    });

    console.log(response.status);
    if(response.status === 200){
      setSuccessMessage('Your post submitted successfully')
      setErrorMessage('');
      navigate({
        pathname: `/GetShipping/${response.data._id}`,
      });
    }
  } catch(err){
    console.error(err);
    setErrorMessage('Error listing your post');
    setSuccessMessage('');
  }


}
const handlePhotoUpload = () => {
  // Implement your photo upload logic here
  // You may want to update the 'photos' state with the selected files
};







  const formStyles: React.CSSProperties = {
    marginTop: '5vh',
    minHeight: '50vh',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: 'white',
    maxWidth: '100%',
  };

 
  return (
    <Box >
        <Navbar/>
        <div style={{background:'#5F6E72 ',height:'50vh'}}>
            <Grid container xs={12} >
                <Grid xs={10}>
                <Typography variant='h3'
                    style={{
                   
                        fontWeight:'700',
                        padding:'20vh',
                        color:'white'}}>List your property for sell here.</Typography>
                        <Typography variant='subtitle1'
                         style={{
                           marginTop:'-37vh',
                            fontWeight:'700',
                            padding:'20vh',
                            color:'white'}} >
                            Remember that a well-documented, 
                            visually appealing listing 
                            attracts genuine interest 
                            and increases your chances 
                            of a successful transaction. 
                            Happy listing!</Typography>


                </Grid>

                <Grid xs={6}>
                
                </Grid>
            </Grid>
        
     

        </div>
       
        <Grid
        container
        style={formStyles}
        sx={{
          padding: '20px',
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={8} md={8}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={4} style={{ padding: '20px' }}>
                <TextField
                  label="Title(Property Type)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>

              <Grid item xs={4} style={{ padding: '20px' }}>
                <TextField
                  label="Perches(Sq Ft)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="perches"
                  type="perches"
                  value={perches}
                  onChange={(e) => setPerches(e.target.value)}
                />
              </Grid>

              <Grid item xs={4} style={{ padding: '20px' }}>
                <TextField
                  label="Rooms"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="rooms"
                  type="tel"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                />
              </Grid>

              <Grid item xs={4} style={{ padding: '20px' }}>
                <TextField
                  label="Bedrooms"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="bedrooms"
                  type="number"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                />
              </Grid>

              <Grid item xs={4} style={{ padding: '20px' }}>
                <TextField
                  label="Bathrooms"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="bathrooms"
                  type="number"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                />
              </Grid>

              <Grid item xs={4} style={{ padding: '20px' }}>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>

              <Grid item xs={6} style={{ padding: '20px' }}>
                <TextField
                  label="Price"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>

              <Grid item xs={6} style={{ padding: '20px' }}>
                <TextField
                  label="City"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{ padding: '20px' }}>
                <TextField
                  label="Further Enquires"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={6}
                  margin="normal"
                  name="furtherEnquiries"
                  value={furtherEnquiries}
                  onChange={(e) => setFurtherEnquiries(e.target.value)}
                 
                />
              </Grid>

             

           

              

              <Grid item xs={12}>
                <InputLabel> Price Negotiable?</InputLabel>
                <input
                  type="checkbox"
                  id="negotiable"
                  name="negotiable"
                  checked={negotiable || false} // Provide a default value to avoid the warning
                  onChange={() => setNegotiable((prevValue) => !prevValue)}
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel>Upload Photos</InputLabel>
              </Grid>

              <Grid item xs={6}>
                <label htmlFor="photo-upload">
                  <input
                    style={{ display: 'none' }}
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoUpload}
                  />
                  <Button
                    variant="outlined"
                    component="span"
                    startIcon={<PhotoCameraIcon />}
                    style={{ marginRight: '10px' }}
                  >
                    Take Photos
                  </Button>
                </label>
              </Grid>

              <Grid item xs={12}>
                <label htmlFor="file-upload">
                  <input
                    style={{ display: 'none' }}
                    id="file-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={handlePhotoUpload}
                  />
                  <Button variant="outlined" component="span" startIcon={<AttachFileIcon />}>
                    Attach Files
                  </Button>
                </label>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
export default ListwithUs;