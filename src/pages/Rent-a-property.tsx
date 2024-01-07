import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, Theme } from '@mui/system'; // Update the import statement
import Footer from '../components/Footer';
import Homeimg5 from '../images/Homeimg5.avif';
import Navbar from '../components/Navbar';





interface Listing {
  _id: string;
  title: string;
  Keymoney: string;
  rooms: string;
  bedrooms: string;
  bathrooms: string;
  price: number;
  negotiable: boolean;
  city: string;
}

const CustomSearchBarRoot = styled('div')(({ theme }) => ({
  padding:'20px',
  maxWidth: 400,
  margin: '1rem', 
  marginLeft: 'auto',
  borderRadius: theme.shape.borderRadius,
}));

function CustomSearchBar({
  listings,
  onSearch,
}: {
  listings: Listing[];
  onSearch: (results: Listing[]) => void;
}) {
  const [titleSearchTerm, setTitleSearchTerm] = useState<string>('');
  

  const handleSearch = () => {
    try {
      console.log('Title Search Term:', titleSearchTerm);

      const filteredListings: Listing[] = listings.filter((listing) => {
        const titleMatch =
          listing.title &&
          listing.title.toLowerCase().includes(titleSearchTerm.toLowerCase());

        console.log('Title Match:', titleMatch);

        // If title search term is empty, return true (no filtering)
        if (!titleSearchTerm) {
          return true;
        }

        return titleMatch;
      });

      console.log('Filtered Listings:', filteredListings);

      onSearch(filteredListings);
    } catch (error) {
      console.error('Error in handleSearch:', error);
    }
  };

  const handleTitleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTitleSearchTerm(e.target.value);
  };

  useEffect(() => {
    // Ensure that this hook logs the correct data
    console.log('Listings:', listings);
  }, [listings]);

  return (
    <CustomSearchBarRoot>
      <TextField
        label="What are you looking for?"
        variant="outlined"
        fullWidth
        style={{ display: 'flex', justifyContent: 'flex-end' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={titleSearchTerm}
        onChange={handleTitleInputChange}
      />
    </CustomSearchBarRoot>
  );
}

function Rentaproperty() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredResults, setFilteredResults] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8070/RentProperties/fetch-renting');
        console.log(response);
        setListings(response.data);
        setFilteredResults(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (results: Listing[]) => {
    setFilteredResults(results);
  };

  return (
    <div>
     <Navbar/>
      
      <Typography variant="h3" 
      style={{display:'flex',justifyContent:'center',alignItems:'center', 
      fontWeight:600,padding:'30px',marginBottom:'-10vh',
      background:''}} gutterBottom>
        Rent your new property here!
      </Typography>
      
     
      <CustomSearchBar listings={listings} onSearch={handleSearch} />
 
      <div  style={{background:'white',margin:'10vh'}}>
      <Grid container justifyContent="center" spacing={2}>
        {filteredResults.map((listing) => (
          <Grid item key={listing._id} xs={12} sm={6} md={6} lg={3} 
          sx={{ margin: '0 1rem', padding:'20px'}}>
            <Paper elevation={3}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia sx={{ height: 140 }} image={Homeimg5} title="House" />
                <CardContent>
                  <Typography variant="h6">{listing.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Keymoney: {listing.Keymoney}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rooms: {listing.rooms}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bedrooms: {listing.bedrooms}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bathrooms: {listing.bathrooms}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    City: {listing.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monthly Price: {listing.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Negotiable: {listing.negotiable ? 'Yes' : 'No'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">See More</Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          
        ))}
      </Grid>

      </div>
     
          <Footer/>
    </div>
  );
}
export default Rentaproperty;