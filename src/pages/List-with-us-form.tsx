import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Grid, Typography } from '@mui/material'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import { SelectChangeEvent } from '@mui/material/Select';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar';



interface FormData {
  title: string;
  perches: string;
  rooms: string;
  bedrooms: number;
  bathrooms: number;
  address: string;
  price: number;
  negotiable: boolean;
  furtherEnquiries: string;
  photos: File[];
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    perches: '',
    rooms: '',
    bedrooms: 0,
    bathrooms: 0,
    address: '',
    price: 0,
    negotiable: false,
    furtherEnquiries: '',
    photos: [],
  });

  const handleChange = (event: SelectChangeEvent<string>) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name as string]: event.target.value as string,
    }));
  };

  const handleTextFieldChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData((prevData) => ({ ...prevData, [event.target.name]: event.target.value }));
  };

  const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData((prevData) => ({ ...prevData, [event.target.name]: event.target.checked }));
  };

  const handlePhotoUpload: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files) {
      const newPhotos = Array.from(event.target.files) as File[];
      setFormData((prevData) => ({ ...prevData, photos: [...prevData.photos, ...newPhotos] }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  };
 

  const buttonStyles = {
    marginTop: '20px',
  };
  const formStyles: React.CSSProperties = {
    marginTop:'5vh',
    minHeight:'50vh',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background:'white',
    maxWidth:'100%'
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
                        color:'white'}}>List your property here.</Typography>
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
       
  <Grid container style={formStyles}  
  sx={{ 
    padding:'20px',
    flexGrow: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center' }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={12} sm={8} md={8}>
      {/* Your form goes here */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={4} style={{padding:'20px'}}>
          <TextField
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
              name="Title"
              value={formData.title}
              onChange={handleTextFieldChange}
            />
          </Grid>

          <Grid xs={4} style={{padding:'20px'}}>
            <TextField
            label="Perches(Sq Ft)"
            variant="outlined"
            fullWidth
            margin="normal"
            name="perches"
            type="perches"
            value={formData.perches}
            onChange={handleTextFieldChange}
        
        />
        </Grid>

        <Grid xs={4} style={{padding:'20px'}}>
        <TextField
        label="Rooms"
        variant="outlined"
        fullWidth
        margin="normal"
        name="rooms"
        type="tel"
        value={formData.rooms}
        onChange={handleTextFieldChange}
        
      />
        </Grid>

        <Grid xs={4} style={{padding:'20px'}}>
           
        <TextField
            label="Bedrooms"
            variant="outlined"
            fullWidth
            margin="normal"
            name="bedrooms"
            type="number"
            value={formData.bedrooms}
            onChange={handleTextFieldChange}
        
        />
        </Grid>

        <Grid xs={4} style={{padding:'20px'}}>
        <TextField
        label="Bathrooms"
        variant="outlined"
        fullWidth
        margin="normal"
        name="bathrooms"
        type="number"
        value={formData.bathrooms}
        onChange={handleTextFieldChange}
      />
        </Grid>

        <Grid xs={4} style={{padding:'20px'}}>
           
        <TextField
        label="Address"
        variant="outlined"
        fullWidth
        margin="normal"
        name="address"
        value={formData.address}
        onChange={handleTextFieldChange}
       
      />

        </Grid>
        <Grid xs={4} style={{padding:'20px'}}>
        <TextField
        label="Price"
        variant="outlined"
        fullWidth
        margin="normal"
        name="price"
        value={formData.price}
        onChange={handleTextFieldChange}
       
      />

        </Grid>

        <Grid xs={8} style={{padding:'20px'}}>
        <TextField
        label="Further Enquires"
        variant="outlined"
        fullWidth
        margin="normal"
        name="furtherEnq"
        value={formData.furtherEnquiries}
        onChange={handleTextFieldChange}
       
      />

        </Grid>

          {/* Repeat the pattern for other form fields */}
          
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
            <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
</Box>
  );
};

export default MyForm;
