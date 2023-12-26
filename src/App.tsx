// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserContextProvider } from './contex/userContex';
import { CheckHome } from './pages/firstHome';
import DividerText from './pages/test';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import SignInSide from './pages/Signin';
import { ListwithUs } from './pages/List-with-Us';
import { Listwitusform } from './pages/List-wit-us-add';
import Listwithusform from './pages/List-with-us-form';
import SuccessListing from './pages/SuccessListing';
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
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignInSide />} />
            <Route path='/List-with-us' element={<ListwithUs />} />
            <Route path='/List-with-us-add' element={<Listwitusform />} />
            <Route path='/List-with-us-form' element={<Listwithusform />} />
            <Route path='/Listing-success' element={<SuccessListing />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
