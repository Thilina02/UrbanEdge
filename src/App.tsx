import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserContextProvider } from './contex/userContex';
import  {CheckHome } from './pages/firstHome';
import DividerText from './pages/test';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import SignInSide from './pages/Signin';
import { ListwithUs } from './pages/List-with-Us';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Check' element={<CheckHome/>}/>
          <Route path='/dev' element={<DividerText/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/SignIn' element={<SignInSide/>}/>
          <Route path='/List-with-us' element={<ListwithUs/>}/>
        </Routes>
      </Router>

    </UserContextProvider>
  );
}

export default App;
