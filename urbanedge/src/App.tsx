// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserContextProvider } from './contex/userContex';
import { CheckHome } from './pages/firstHome';
import DividerText from './pages/test';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import { ListwithUs } from './pages/List-with-Us';
import { Listwitusform } from './pages/List-wit-us-add';
import Listwithusform from './pages/List-with-us-form';
import SuccessListing from './pages/SuccessListing';
import RentProperty from './pages/Rent-Property-form';
import BuyAproperty from './pages/Buy-a-property';
import Rentaproperty from './pages/Rent-a-property';
import Imgetest from './pages/imgetest';
import Apartmenttype from './pages/Apartment-type';
import Uploadedadds from './pages/Uploaded-adds';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
// Import ThemeProvider and createTheme
import { ThemeProvider } from '@mui/system';

import { createTheme } from '@mui/material/styles';

// Your custom theme
const theme = createTheme();

function App() {
  return (
    // Wrap the entire app with ThemeProvider and provide the theme
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Check' element={<CheckHome />} />
            <Route path='/dev' element={<DividerText />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/List-with-us' element={<ListwithUs />} />
            <Route path='/List-with-us-add' element={<Listwitusform />} />
            <Route path='/List-with-us-form' element={<Listwithusform />} />
            <Route path='/Listing-success' element={<SuccessListing />} />
            <Route path='/All-Showcast-Items' element={<BuyAproperty />} />
            <Route path='/Rent-Property-form' element={<RentProperty />} />
            <Route path='/Rent-a-Property' element={<Rentaproperty />} />
            <Route path='/img' element={<Imgetest />} />
            <Route path='/Your-Adds' element={<Uploadedadds />} />
            <Route path='/Apartments' element={<Apartmenttype />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Profile/:id' element={<Profile />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
