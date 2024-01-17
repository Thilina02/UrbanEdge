const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8070;

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));

app.use(cors());
app.use(bodyParser.json());

dotenv.config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    
});

const ListingRoutes = require('./routes/ListingRoutes')
// Use the listingRoutes for routes related to listings
app.use('/listings', ListingRoutes);


const RentingRoute = require('./routes/RentPropertyRoute')
// Use the listingRoutes for routes related to listings
app.use('/RentProperties', RentingRoute);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose Connection Success!!');
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});
