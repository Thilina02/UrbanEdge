import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

interface Listing {
  _id: string;
  title: string;
  perches: string;
  rooms: string;
  // Add more fields as needed
}

function ShowCast() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/http://localhost:8070/listings/fetchData'); // Provide type information here
        console.log(response)
        setListings(response.data.listings);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ShowCast
      </Typography>
      <List>
        {listings.map((listing) => (
          <ListItem key={listing._id}>
            <ListItemText
              primary={listing.title}
              secondary={`Perches: ${listing.perches}, Rooms: ${listing.rooms}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ShowCast;
